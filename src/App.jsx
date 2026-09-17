import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'; 
import { Send, CheckCircle2 } from 'lucide-react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services'; 
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import './App.css';

// Page switch hone par screen auto-top par scroll karegi
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // TELEMETRY DISPATCH STATE
  const [dispatchEmail, setDispatchEmail] = useState("");
  const [dispatchStatus, setDispatchStatus] = useState("idle"); // 'idle' | 'success' | 'error'

  // Telemetry Form Submit Handler
  const handleDispatchSubmit = (e) => {
    e.preventDefault();

    if (!dispatchEmail || !dispatchEmail.includes("@")) {
      setDispatchStatus("error");
      return;
    }

    // Save to LocalStorage
    const existingSubscribers = JSON.parse(
      localStorage.getItem("pulse360_telemetry_subscribers") || "[]"
    );

    if (!existingSubscribers.includes(dispatchEmail)) {
      localStorage.setItem(
        "pulse360_telemetry_subscribers",
        JSON.stringify([...existingSubscribers, dispatchEmail])
      );
    }

    setDispatchStatus("success");
    setDispatchEmail("");

    // Auto reset after 4 seconds
    setTimeout(() => {
      setDispatchStatus("idle");
    }, 4000);
  };

  // JOIN NOW Click Handler
  const handleJoinNow = () => {
    if (location.pathname !== "/") {
      navigate("/#pricing-section");
    } else {
      const element = document.getElementById("pricing-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Cross-page navigation ke baad scroll trigger karne ke liye
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#pricing-section") {
      const timer = setTimeout(() => {
        const element = document.getElementById("pricing-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        window.history.replaceState(null, "", "/");
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="app-main-wrapper">
      {/* ScrollToTop component execution */}
      <ScrollToTop />

      {/* GLOBAL NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="brand-icon">⚡</div>
          <div className="brand-text">
            <span className="brand-title">
              PULSE<span className="brand-accent">360</span>
            </span>
            <span className="brand-sub">LUXURY PERFORMANCE</span>
          </div>
        </div>

        <ul className="nav-links">
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">HOME</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className={location.pathname === '/services' ? 'active' : ''}>
            <Link to="/services">SERVICES & PROGRAMS</Link>
          </li>
          <li className={location.pathname === '/gallery' ? 'active' : ''}>
            <Link to="/gallery">TRANSFORMATION GALLERY</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="btn-join" onClick={handleJoinNow}>
            JOIN NOW
          </button>
        </div>
      </nav>

      {/* DYNAMIC ROUTE PAGES */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      {/* GLOBAL FOOTER */}
      <footer className="footer-container">
        <div className="footer-content-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrapper">
              <h3 className="footer-logo">
                <span className="logo-white">PULSE</span>
                <span className="logo-accent">360</span>
              </h3>
              <span className="footer-badge">Elite Tech Gym</span>
            </div>
            <p className="footer-brand-desc">
              Uncompromising biometric training, hyper-technical recovery chambers, and luxury athletic hospitality for high-performance pioneers.
            </p>
            <div className="footer-location">
              <span className="location-dot"></span>
              <span>Downtown Flagship, Manhattan, NY</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services & Programs</Link></li>
              <li><Link to="/gallery">Transformation Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Operational Protocol Card */}
          <div className="footer-protocol-col">
            <h4 className="footer-col-title">OPERATIONAL PROTOCOL</h4>
            <div className="protocol-card">
              <h5 className="protocol-card-title">Open 24/7 for Elite Members</h5>
              <p className="protocol-card-desc">
                Private biometric entry gates available round the clock. Full bio-recovery and personal hyper-training staff on call.
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter / Telemetry Dispatch */}
          <div className="footer-dispatch-col">
            <h4 className="footer-col-title">TELEMETRY DISPATCH</h4>
            <p className="dispatch-desc">
              Receive exclusive athletic briefings, bio-hacking protocols, and VIP guest privileges.
            </p>
            
            {dispatchStatus !== "success" ? (
              <form className="dispatch-form" onSubmit={handleDispatchSubmit}>
                <input 
                  type="email" 
                  required
                  placeholder="ATHLETE@PULSE360.COM" 
                  className={`dispatch-input ${dispatchStatus === "error" ? "input-error" : ""}`}
                  value={dispatchEmail}
                  onChange={(e) => {
                    setDispatchEmail(e.target.value);
                    if (dispatchStatus === "error") setDispatchStatus("idle");
                  }}
                />
                <button type="submit" className="dispatch-btn">
                  SYNC
                </button>
              </form>
            ) : (
              <div className="dispatch-success-banner" style={{
                background: "rgba(204, 255, 0, 0.12)",
                border: "1px solid #ccff00",
                color: "#ccff00",
                padding: "10px 14px",
                borderRadius: "8px",
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "1px",
                textAlign: "center"
              }}>
                ⚡ TELEMETRY SYNCED SUCCESSFULLY
              </div>
            )}
          </div>
        </div>

        {/* Bottom Legal / Links Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Pulse360 Fitness Hospitality Group. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy">PRIVACY ARCHITECTURE</a>
            <a href="#terms">TELEMETRY TERMS</a>
            <a href="#concierge">CONCIERGE DESK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}