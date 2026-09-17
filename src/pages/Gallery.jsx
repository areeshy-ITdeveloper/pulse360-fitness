import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, Scan, Activity, ArrowRight, X, CheckCircle2, Ticket, Calendar } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./Gallery.css";

// Unique variable names for each image import
import beforeImg1 from "../assets/before-img1.png";
import afterImg1 from "../assets/after-img1.png";
import beforeImg2 from "../assets/before-img2.png";
import afterImg2 from "../assets/after-img2.png";
import beforeImg3 from "../assets/before-img3.png";
import afterImg3 from "../assets/after-img3.png";
import beforeImg4 from "../assets/before-img4.png";
import afterImg4 from "../assets/after-img4.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const GalleryHero = ({ activeFilter, setActiveFilter }) => {
  const categories = [
    "ALL TRANSFORMATIONS",
    "FAT LOSS & CONDITIONING",
    "HYPERTROPHY & STRENGTH",
    "ATHLETIC RECOMPOSITION",
    "EXECUTIVE WELLNESS"
  ];

  const stats = [
    { value: "100%", label: "DEXA SCAN AUDITED" },
    { value: "-11.4%", label: "AVG BODY FAT DELTA", isHighlight: true },
    { value: "+28.5%", label: "VO2 MAX INCREASE", isHighlight: true },
    { value: "98.2%", label: "PROGRAM ADHERENCE", isHighlight: true }
  ];

  return (
    <section className="gallery-hero-section">
      <motion.div 
        className="gallery-hero-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="gallery-pill-badge">
          <span className="dot-icon"></span>
          <span>VERIFIED ATHLETE PROGRESS</span>
          <span className="badge-separator">/</span>
          <span className="badge-sub">BIO-LAB 4.2</span>
        </div>

        <h1 className="gallery-hero-title">
          TRANSFORMATION <span className="accent-underline">GALLERY</span>
        </h1>

        <p className="gallery-hero-subtitle">
          Real members. Relentless execution. Empirical physiological results <br />
          documented by our Biometrics Lab.
        </p>

        <div className="stats-container-card">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className={`stat-value ${stat.isHighlight ? "accent-stat" : ""}`}>
                {stat.value}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="categories-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const transformationData = [
  {
    id: 1,
    name: "DAVID K.",
    age: 38,
    role: "CORPORATE EXECUTIVE",
    category: "EXECUTIVE WELLNESS",
    tag: "16-WK RECOMP",
    protocol: "16-Week Metabolic Recomposition & Strength",
    beforeImg: beforeImg1,
    afterImg: afterImg1,
    beforeLabel: "BEFORE / WK 0",
    afterLabel: "AFTER / WK 16",
    metrics: [
      { label: "BODY FAT", base: "26.4%", value: "12.1%", highlight: "-14.3% Delta" },
      { label: "LEAN MASS", base: "Baseline", value: "+7.2 lbs", highlight: "Lean Tissue" },
      { label: "RESTING HR", base: "72 bpm", value: "49 bpm", highlight: "-23 bpm" }
    ],
    quote: `"Pulse360 gave me back my stamina and athletic mindset. The data-driven programming left zero room for doubt."`,
    coach: "JULIAN THORNE",
    badge: "98% Adherence"
  },
  {
    id: 2,
    name: "SARAH M.",
    age: 31,
    role: "ARCHITECT & MARATHONER",
    category: "ATHLETIC RECOMPOSITION",
    tag: "12-WK POWER",
    protocol: "12-Week Kinetic Mobility & Power Optimization",
    beforeImg: beforeImg2,
    afterImg: afterImg2,
    beforeLabel: "BEFORE / WK 0",
    afterLabel: "AFTER / WK 12",
    metrics: [
      { label: "MARATHON PR", base: "3h 48m", value: "3h 14m", highlight: "-34 mins" },
      { label: "MOBILITY FMS", base: "12/21", value: "20/21", highlight: "Full Range" },
      { label: "SQUAT 1RM", base: "135 lbs", value: "215 lbs", highlight: "+80 lbs" }
    ],
    quote: `"Elena solved chronic hip impingement that had hindered me for 4 years. I'm faster and pain-free."`,
    coach: "ELENA ROSTOVA",
    badge: "100% Milestone Fit"
  },
  {
    id: 3,
    name: "MARCUS T.",
    age: 44,
    role: "TECH FOUNDER",
    category: "FAT LOSS & CONDITIONING",
    tag: "24-WK REBUILD",
    protocol: "24-Week Total Body Transformation",
    beforeImg: beforeImg3,
    afterImg: afterImg3,
    beforeLabel: "BEFORE / WK 0",
    afterLabel: "AFTER / WK 24",
    metrics: [
      { label: "BODY WEIGHT", base: "218 lbs", value: "184 lbs", highlight: "-34 lbs Fat Loss" },
      { label: "VISCERAL FAT", base: "Level 12", value: "Level 4", highlight: "Optimal Range" },
      { label: "VO2 MAX", base: "36 mL/kg", value: "51 mL/kg", highlight: "Superior Tier" }
    ],
    quote: `"The combination of heavy lifting, infrared sauna, and blood biomarker tracking changed my entire life."`,
    coach: "MARCUS VANCE",
    badge: "Bio Checked"
  },
  {
    id: 4,
    name: "PRIYA R.",
    age: 29,
    role: "PHYSICIAN & TRIATHLETE",
    category: "HYPERTROPHY & STRENGTH",
    tag: "16-WK HYBRID",
    protocol: "16-Week Hybrid Athletic Conditioning",
    beforeImg: beforeImg4,
    afterImg: afterImg4,
    beforeLabel: "BEFORE / WK 0",
    afterLabel: "AFTER / WK 16",
    metrics: [
      { label: "BODY FAT", base: "28.0%", value: "15.2%", highlight: "-12.8% Absolute" },
      { label: "DEADLIFT 1RM", base: "185 lbs", value: "305 lbs", highlight: "+120 lbs Gain" },
      { label: "2KM ROW SPLIT", base: "1:58/500m", value: "1:39/500m", highlight: "-19s / 500m" }
    ],
    quote: `"The community pushes you past limits you didn't know you had. The facility standard is unmatched."`,
    coach: "JULIAN THORNE",
    badge: "Telemetry Mastered"
  }
];

export const TransformationGrid = ({ activeFilter }) => {
  const filteredData = activeFilter === "ALL TRANSFORMATIONS"
    ? transformationData
    : transformationData.filter((item) => item.category === activeFilter);

  return (
    <section className="transformations-section">
      <div className="transformations-grid">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="transformation-card">
              <div className="card-header">
                <div className="user-meta">
                  <h3 className="user-name">
                    {item.name} <span className="user-age">/ AGE {item.age}</span>
                  </h3>
                  <span className="user-role">{item.role}</span>
                </div>
                <div className="card-tag">{item.tag}</div>
              </div>

              <div className="protocol-bar">
                <span className="protocol-title">Protocol:</span> {item.protocol}
              </div>

              <div className="comparison-container">
                <div className="image-box before">
                  <img src={item.beforeImg} alt={`${item.name} Before`} />
                  <span className="img-badge before-badge">{item.beforeLabel}</span>
                </div>
                <div className="image-box after">
                  <img src={item.afterImg} alt={`${item.name} After`} />
                  <span className="img-badge after-badge">{item.afterLabel}</span>
                </div>
              </div>

              <div className="metrics-grid">
                {item.metrics.map((m, idx) => (
                  <div key={idx} className="metric-item">
                    <span className="metric-label">{m.label}</span>
                    <span className="metric-base">{m.base}</span>
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-highlight">{m.highlight}</span>
                  </div>
                ))}
              </div>

              <p className="card-quote">{item.quote}</p>

              <div className="card-footer">
                <div className="coach-info">
                  <span className="shield-icon">🛡️</span>
                  <span>COACH: <strong className="coach-name">{item.coach}</strong></span>
                </div>
                <div className="adherence-badge">
                  <span className="badge-check">⚡</span>
                  <span>{item.badge}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ color: "#ffffff", textAlign: "center", gridColumn: "1 / -1", padding: "40px" }}>
            No transformations found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export const GuaranteeSection = () => {
  const [activeModal, setActiveModal] = useState(null); // 'pass' | 'booking' | 'pass-generated' | null
  const [passData, setPassData] = useState(null);

  // Form States
  const [passForm, setPassForm] = useState({ name: "", email: "", phone: "" });
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", date: "", time: "", testType: "DEXA SCAN" });
  const [isBooked, setIsBooked] = useState(false);

  // Handle Pass Generation
  const handleClaimPass = (e) => {
    e.preventDefault();
    const generatedPass = {
      id: `P360-${Math.floor(100000 + Math.random() * 900000)}`,
      name: passForm.name,
      email: passForm.email,
      issueDate: new Date().toLocaleDateString(),
      expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
      status: "ACTIVE"
    };

    // LocalStorage Save
    localStorage.setItem("pulse360_vip_pass", JSON.stringify(generatedPass));
    setPassData(generatedPass);
    setActiveModal("pass-generated");
  };

  // Handle Lab Booking
  const handleBooking = (e) => {
    e.preventDefault();
    const newBooking = {
      id: `LAB-${Math.floor(1000 + Math.random() * 9000)}`,
      ...bookingForm,
      createdAt: new Date().toISOString()
    };

    // Save to LocalStorage
    const existingBookings = JSON.parse(localStorage.getItem("pulse360_lab_bookings") || "[]");
    localStorage.setItem("pulse360_lab_bookings", JSON.stringify([...existingBookings, newBooking]));
    
    setIsBooked(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsBooked(false);
  };

  return (
    <section className="guarantee-section-wrapper">
      <div className="guarantee-container">
        
        {/* Top Guarantee Card */}
        <div className="guarantee-card top-card">
          <div className="card-left-content">
            <div className="badge-header">
              <ShieldCheck size={16} className="badge-icon" />
              <span>SCIENTIFIC CREDENTIAL STANDARD</span>
            </div>
            
            <h2 className="card-title">
              EMPIRICAL GUARANTEE: ZERO ESTIMATES. TOTAL BIOMETRIC VERIFICATION.
            </h2>
            
            <p className="card-description">
              Every numerical transformation documented at Pulse360 is audited by clinical-grade DEXA
              body composition scanners, Styku 3D volumetric mapping, and ongoing metabolic lactate
              threshold tests. We do not rely on standard calipers or vanity scales.
            </p>
          </div>

          <div className="card-right-features">
            <div className="feature-box">
              <FlaskConical size={24} className="feature-icon" />
              <h4 className="feature-title">DEXA DUAL X-RAY</h4>
              <p className="feature-sub">±0.5% Precision</p>
            </div>

            <div className="feature-box">
              <Scan size={24} className="feature-icon" />
              <h4 className="feature-title">STYKU 3D INFRA</h4>
              <p className="feature-sub">2M Cloud Points</p>
            </div>

            <div className="feature-box">
              <Activity size={24} className="feature-icon" />
              <h4 className="feature-title">VO2 SUB-MAX</h4>
              <p className="feature-sub">Gas Analysis</p>
            </div>
          </div>
        </div>

        {/* CTA Banner Card */}
        <div id="cta-pass-section" className="guarantee-card cta-card">
          <div className="cta-left-content">
            <div className="dot-badge">
              <span className="green-dot"></span>
              <span>LIMITED MEMBERSHIP INGESTION WINDOW</span>
            </div>

            <h2 className="cta-title">
              YOUR <br />
              TRANSFORMATION <br />
              STARTS TODAY
            </h2>

            <p className="cta-description">
              Experience our flagship Manhattan biomechanics facility. Includes full DEXA body
              scan, VO2 readiness assessment, and private training consultation.
            </p>
          </div>

          <div className="cta-right-actions">
            <button className="btn-primary-neon" onClick={() => setActiveModal("pass")}>
              <span>CLAIM 7-DAY PASS</span>
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary-dark" onClick={() => setActiveModal("booking")}>
              BOOK LAB ASSESSMENT
            </button>
          </div>
        </div>

      </div>

      {/* ------------ MODAL 1: 7-DAY PASS FORM & CARD ------------ */}
      {activeModal === "pass" && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="modal-close-btn" onClick={closeModal}><X size={20} /></button>
            <div className="modal-header">
              <Ticket className="modal-icon-accent" size={28} />
              <h3>CLAIM 7-DAY VIP ACCESS</h3>
              <p>Enter details to issue your digital pass directly to local storage.</p>
            </div>
            <form onSubmit={handleClaimPass} className="modal-form">
              <div className="form-group">
                <label>FULL NAME</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Alex Mercer"
                  value={passForm.name} 
                  onChange={(e) => setPassForm({ ...passForm, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  required 
                  placeholder="alex@pulse360.io"
                  value={passForm.email} 
                  onChange={(e) => setPassForm({ ...passForm, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+1 (555) 000-0000"
                  value={passForm.phone} 
                  onChange={(e) => setPassForm({ ...passForm, phone: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-modal-submit">GENERATE DIGITAL PASS</button>
            </form>
          </div>
        </div>
      )}

      {/* DIGITAL PASS RESULT MODAL */}
      {activeModal === "pass-generated" && passData && (
        <div className="modal-overlay">
          <div className="modal-card pass-display-card">
            <button className="modal-close-btn" onClick={closeModal}><X size={20} /></button>
            <div className="pass-chip">PULSE360 VIP ACCESS</div>
            <h2>7-DAY ATHLETE PASS</h2>
            <div className="pass-details-grid">
              <div><span>PASS ID:</span> <strong>{passData.id}</strong></div>
              <div><span>ATHLETE:</span> <strong>{passData.name}</strong></div>
              <div><span>ISSUED:</span> <strong>{passData.issueDate}</strong></div>
              <div><span>EXPIRES:</span> <strong>{passData.expiryDate}</strong></div>
            </div>
            <div className="pass-status-bar">
              <CheckCircle2 size={16} /> PASS SAVED TO LOCAL STORAGE
            </div>
          </div>
        </div>
      )}

      {/* ------------ MODAL 2: BOOK LAB ASSESSMENT ------------ */}
      {activeModal === "booking" && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="modal-close-btn" onClick={closeModal}><X size={20} /></button>
            
            {!isBooked ? (
              <>
                <div className="modal-header">
                  <Calendar className="modal-icon-accent" size={28} />
                  <h3>BOOK BIOMETRIC ASSESSMENT</h3>
                  <p>Reserve clinical-grade DEXA scan & Vo2 Max testing session.</p>
                </div>
                <form onSubmit={handleBooking} className="modal-form">
                  <div className="form-group">
                    <label>FULL NAME</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Alex Mercer"
                      value={bookingForm.name} 
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>EMAIL</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="alex@pulse360.io"
                      value={bookingForm.email} 
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>DATE</label>
                      <input 
                        type="date" 
                        required 
                        value={bookingForm.date} 
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>TIME</label>
                      <input 
                        type="time" 
                        required 
                        value={bookingForm.time} 
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>ASSESSMENT TYPE</label>
                    <select 
                      value={bookingForm.testType} 
                      onChange={(e) => setBookingForm({ ...bookingForm, testType: e.target.value })}
                    >
                      <option value="DEXA SCAN">DEXA Dual X-Ray Body Scan</option>
                      <option value="STYKU 3D">Styku 3D Volumetric Mapping</option>
                      <option value="VO2 SUB-MAX">VO2 Sub-Max Gas Analysis</option>
                      <option value="COMPLETE SUITE">Full Biometric Lab Suite</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-modal-submit">CONFIRM BOOKING</button>
                </form>
              </>
            ) : (
              <div className="booking-success-view">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>LAB ASSESSMENT RESERVED</h3>
                <p>Booking details saved. Our Biometrics Lab team will reach out via email.</p>
                <button className="btn-modal-submit" onClick={closeModal}>DONE</button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL TRANSFORMATIONS");
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#cta-pass-section") {
      const element = document.getElementById("cta-pass-section");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location]);

  return (
    <div className="gallery-page">
      <GalleryHero activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <TransformationGrid activeFilter={activeFilter} />
      <GuaranteeSection />
    </div>
  );
}