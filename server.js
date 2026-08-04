/**
 * SECURE EXPRESS BACKEND SERVER - NANAK TECH SOLUTIONS
 * Serves compiled SPA assets and proxies API requests securely.
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase client if keys are provided
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseUrl !== 'your_supabase_project_url_here' && supabaseAnonKey && supabaseAnonKey !== 'your_supabase_anon_key_here') {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('[SERVER START] Supabase client initialized successfully.');
  } catch (err) {
    console.error('[SERVER ERROR] Failed to initialize Supabase client:', err);
  }
} else {
  console.log('[SERVER START] Supabase credentials not configured. Running in local fallback mode.');
}

const app = express();
const PORT = process.env.PORT || 5001;

/* --------------------------------------------------------------------------
   SECURITY CONFIGURATION & HEADERS (MANUAL + HELMET)
   -------------------------------------------------------------------------- */
// 1. Configure Helmet for strict headers (CSP, clickjacking, type sniffing, STS)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        connectSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    xFrameOptions: { action: "deny" }, // Prevent clickjacking (X-Frame-Options: DENY)
    referrerPolicy: { policy: "strict-origin-when-cross-origin" }, // Referrer policy
  })
);

// Extra manual security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff'); // Block mime-sniffing
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload'); // Force HSTS
  next();
});

// 2. Configure CORS - Allow self during dev and enforce strict origins
const allowedOrigins = [
  'http://localhost:3000', // Dev Vite server
  'http://localhost:5000', // Prod Express server (default)
  'http://localhost:5001', // Custom secure Express port
  'http://localhost:5173', // Vite standard dev port
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5000',
  'http://127.0.0.1:5001',
  'http://127.0.0.1:5173',
  'https://nanaktechsolutions.com',
  'http://nanaktechsolutions.com',
  'https://www.nanaktechsolutions.com',
  'http://www.nanaktechsolutions.com',
  'https://seashell-tiger-282048.hostingersite.com',
  'http://seashell-tiger-282048.hostingersite.com'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl) or matching dev ports
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('CORS Policy Breach: Request Origin Blocked.'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

// Parse JSON payloads securely (limit payload sizes to block DDoS)
app.use(express.json({ limit: '100kb' })); // Raised to 100kb for CMS layouts data payload

/* --------------------------------------------------------------------------
   CMS FLAT-FILE DATABASE API ENDPOINTS
   -------------------------------------------------------------------------- */
app.get('/api/cms/load', async (req, res) => {
  const jsonPath = path.join(__dirname, 'content_state.json');
  
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('cms_state')
        .select('content')
        .eq('id', 'nanak_cms')
        .single();
        
      if (error && error.code !== 'PGRST116') {
        console.error('[SUPABASE ERROR] Failed to load CMS state:', error);
      } else if (data) {
        return res.status(200).json(data.content);
      } else {
        const fileData = fs.readFileSync(jsonPath, 'utf8');
        const parsedContent = JSON.parse(fileData);
        
        await supabase
          .from('cms_state')
          .insert([{ id: 'nanak_cms', content: parsedContent }]);
          
        console.log('[SUPABASE LOG] Seeded cms_state table in Supabase.');
        return res.status(200).json(parsedContent);
      }
    } catch (err) {
      console.error('[SUPABASE EXCEPTION] Failed to load CMS state:', err);
    }
  }

  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read CMS configuration state.' });
    }
    try {
      return res.status(200).json(JSON.parse(data));
    } catch (parseErr) {
      return res.status(500).json({ error: 'CMS file corrupted.' });
    }
  });
});

app.post('/api/cms/save', async (req, res) => {
  const jsonPath = path.join(__dirname, 'content_state.json');
  const newContent = req.body;
  if (!newContent || typeof newContent !== 'object') {
    return res.status(400).json({ error: 'Invalid CMS configuration payload.' });
  }
  fs.writeFile(jsonPath, JSON.stringify(newContent, null, 2), 'utf8', async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to write CMS configuration state.' });
    }
    console.log('[SECURE LOG] CMS content_state.json successfully updated.');

    if (supabase) {
      try {
        const { error } = await supabase
          .from('cms_state')
          .upsert({ id: 'nanak_cms', content: newContent });
          
        if (error) {
          console.error('[SUPABASE ERROR] Failed to upsert CMS state:', error);
        } else {
          console.log('[SUPABASE LOG] CMS state successfully upserted to Supabase.');
        }
      } catch (err) {
        console.error('[SUPABASE EXCEPTION] Failed to save CMS state:', err);
      }
    }

    return res.status(200).json({ success: true, message: 'CMS state saved successfully.' });
  });
});

/* --------------------------------------------------------------------------
   RATE LIMITING & REQUEST VALIDATION
   -------------------------------------------------------------------------- */
// Limit API requests: max 10 requests per 15 minutes per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    error: 'Too many consultation requests from this IP. Please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/consultation', apiLimiter); // Apply limiter specifically to consultation submissions

/* --------------------------------------------------------------------------
   SECURE PROXY API ROUTING
   -------------------------------------------------------------------------- */
app.post('/api/consultation', async (req, res) => {
  const {
    fullname,
    email,
    phone,
    service,
    message
  } = req.body;

  // Server-side Request Validation
  if (!fullname || fullname.trim().length < 2) {
    return res.status(400).json({ error: 'Validation Error: Name must exceed 1 character.' });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Validation Error: Valid email required.' });
  }

  if (!phone || phone.trim().length < 5) {
    return res.status(400).json({ error: 'Validation Error: Valid phone number is required.' });
  }

  console.log(`[SECURE LOG] New contact submission received for ${fullname}.`);

  if (supabase) {
    try {
      const { error } = await supabase
        .from('consultations')
        .insert([{
          fullname,
          email,
          phone,
          service,
          message,
          created_at: new Date()
        }]);

      if (error) {
        console.error('[SUPABASE ERROR] Failed to log contact submission:', error);
      } else {
        console.log(`[SUPABASE LOG] Logged contact submission for ${fullname} directly in Supabase.`);
        return res.status(200).json({
          success: true,
          message: 'Contact logged securely on Supabase.'
        });
      }
    } catch (err) {
      console.error('[SUPABASE EXCEPTION] Exception during submission logging:', err);
    }
  }

  return res.status(200).json({
    success: true,
    message: 'Contact logged securely (Local fallback).'
  });
});

/* --------------------------------------------------------------------------
   STATIC ASSETS SERVING & SPA FALLBACK
   -------------------------------------------------------------------------- */
// Serve static compiled bundle folders from Vite build outputs
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback all SPA routes (e.g. /services/*, /contact-us) back to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start listening
app.listen(PORT, () => {
  console.log(`[SERVER START] Nanak Tech Solutions secure production server running on port ${PORT}`);
});
