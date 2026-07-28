import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import RoiCalculator from './components/RoiCalculator';
import Blog from './pages/Blog';
import Authority from './pages/Authority';
import Contact from './pages/Contact';
import Industries from './pages/Industries';

// Scroll Restoration handler for seamless subpage loads
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Loader onComplete={() => setIntroCompleted(true)} />
      <CustomCursor />
      <Navbar />
      
      <main className="app-main-content">
        <Routes>
          <Route path="/" element={<Home introCompleted={introCompleted} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:industryId" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:caseStudyId" element={<CaseStudies />} />
          <Route path="/roi-calculator" element={
            <div style={{ padding: '8rem 0 6rem 0' }}>
              <div className="container">
                <RoiCalculator />
              </div>
            </div>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleId" element={<Blog />} />
          <Route path="/authority" element={<Authority />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
