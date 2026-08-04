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

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

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
app.get('/api/cms/load', (req, res) => {
  const jsonPath = path.join(__dirname, 'content_state.json');
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

app.post('/api/cms/save', (req, res) => {
  const jsonPath = path.join(__dirname, 'content_state.json');
  const newContent = req.body;
  if (!newContent || typeof newContent !== 'object') {
    return res.status(400).json({ error: 'Invalid CMS configuration payload.' });
  }
  fs.writeFile(jsonPath, JSON.stringify(newContent, null, 2), 'utf8', (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to write CMS configuration state.' });
    }
    console.log('[SECURE LOG] CMS content_state.json successfully updated.');
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
app.post('/api/consultation', (req, res) => {
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

  // Retrieve secure environment configurations
  const SECURE_CRM_KEY = process.env.SECURE_CRM_KEY; // Never exposed to client JS
  const SECURE_DB_URL = process.env.SECURE_DB_URL;

  // In a production server, we would securely post these details to Salesforce, HubSpot, or a secure DB here
  console.log(`[SECURE LOG] New contact submission received for ${fullname}.`);
  console.log(`[SECURE LOG] Accessing internal integrations using DB: ${SECURE_DB_URL ? 'RESOLVED' : 'STUB'} and CRM key: ${SECURE_CRM_KEY ? 'RESOLVED' : 'STUB'}`);

  return res.status(200).json({
    success: true,
    message: 'Contact logged securely on Nanak Tech servers.'
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
