import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {  
  ArrowRight, 
  Flame, 
  ShieldCheck, 
  Star, 
  RotateCw, 
  Snowflake, 
  Award, 
  Network, 
  ArrowUpRight,
  CheckCircle2, 
  Zap,
  Calendar,
  X, 
  User, 
  Mail, 
  Phone, 
  Check,
  Loader2,
  AlertCircle
} from "lucide-react";
import heroVideo from "../assets/hero-video.mp4";
import card1Video from "../assets/card1-video.mp4";
import card2Video from "../assets/card2-video.mp4";
import card3Video from "../assets/card3-video.mp4";
import "./Home.css";

/* Animation Variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

/* -------------------------------------------------------------------------- */
/* HERO SECTION COMPONENT                                                     */
/* -------------------------------------------------------------------------- */
export const HeroSection = () => {
  const navigate = useNavigate();

  // 1. Start Free Trial -> Gallery CTA section
  const handleStartTrial = () => {
    navigate("/gallery#cta-pass-section");
  };

  // 2. Explore Programs -> Services page
  const handleExplorePrograms = () => {
    navigate("/services");
  };

  return (
    <section className="hero-section">
      <video className="hero-video-bg" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      <div className="hero-overlay"></div>

      <motion.div 
        initial={{ opacity: 0, x: -40 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-content"
      >
        <div className="pill-badge">
          <span className="pill-icon">⚡</span> NEXT-GEN PERFORMANCE FACILITY
        </div>

        <h1 className="hero-title">
          REDEFINE <br />
          YOUR <br />
          <span className="accent-text">LIMITS</span>
        </h1>

        <p className="hero-sub">
          Experience ultra-high-performance athletic conditioning, biomechanical training suites, and luxury wellness recovery engineered for uncompromising results.
        </p>

        <div className="hero-cta-group">
          {/* Gallery navigation */}
          <button className="btn-primary" onClick={handleStartTrial}>
            START FREE TRIAL <ArrowRight size={18} />
          </button>
          
          {/* Services page navigation */}
          <button className="btn-secondary" onClick={handleExplorePrograms}>
            EXPLORE PROGRAMS ✈
          </button>
        </div>

        <div className="hero-trust-bar">
          <div className="rating-box">
            <div className="stars">
              <Star size={14} fill="#ccff00" color="#ccff00" />
              <Star size={14} fill="#ccff00" color="#ccff00" />
              <Star size={14} fill="#ccff00" color="#ccff00" />
              <Star size={14} fill="#ccff00" color="#ccff00" />
              <Star size={14} fill="#ccff00" color="#ccff00" />
            </div>
            <span className="rating-num">4.98 / 5.0</span>
          </div>
          <div className="trust-divider"></div>
          <p className="trust-text">
            Trusted by <strong>12,000+</strong> elite athletes & performers
          </p>
          <div className="brand-sponsors">
            <span>HYPERICE</span>
            <span>WHOOP</span>
            <span>EQUINOX</span>
          </div>
        </div>
      </motion.div>

      {/* Right Side Dashboard Card (Untouched & Exact Same) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
        className="hero-dashboard-container"
      >
        <div className="dashboard-top-tag">
          <ShieldCheck size={14} className="accent-text" /> BIOMETRIC LAB ACCREDITED
        </div>

        <div className="hero-stats-card">
          <div className="dash-header">
            <div className="live-status">
              <span className="live-dot"></span> LIVE IN CLUBS
            </div>
            <span className="active-count">14,820+ ACTIVE</span>
          </div>

          <div className="dash-grid">
            <div className="metric-box">
              <span className="metric-label">SUCCESS RATE</span>
              <div className="metric-flex">
                <div className="progress-ring-mock">98%</div>
                <div>
                  <h3 className="metric-val">98.4%</h3>
                  <span className="metric-sub accent-text">BIOMETRIC TARGET MET</span>
                </div>
              </div>
              <p className="metric-footer">Validated by DEXA + VO2</p>
            </div>

            <div className="metric-box">
              <span className="metric-label">FACILITY LOAD</span>
              <h3 className="metric-val">42% <span className="metric-sub">CAPACITY</span></h3>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '42%' }}></div>
              </div>
              <p className="metric-footer">PEAK GEAR AVAILABLE</p>
            </div>
          </div>

          <div className="energy-card">
            <div>
              <span className="metric-label">REAL-TIME ENERGY BURNED TODAY</span>
              <h2 className="energy-val">2,481,900 <span className="accent-text">KCAL</span></h2>
            </div>
            <div className="energy-icon">
              <Flame size={20} color="#ccff00" />
            </div>
          </div>

          <div className="hr-zone-card">
            <div className="hr-header">
              <span>HR ZONE DISTRIBUTION</span>
              <span className="hr-zone-name">Zone 4/5 Heavy</span>
            </div>
            <div className="hr-bar-multi">
              <div className="hr-seg seg-1" style={{ width: '15%' }}></div>
              <div className="hr-seg seg-2" style={{ width: '55%' }}></div>
              <div className="hr-seg seg-3" style={{ width: '30%' }}></div>
            </div>
            <div className="hr-labels">
              <span>RECOVERY (15%)</span>
              <span>AEROBIC (55%)</span>
              <span>ANAEROBIC (30%)</span>
            </div>
          </div>
        </div>

        <div className="dashboard-bottom-tag">
          ⚡ VO2 MAX DYNAMIC SUITE
        </div>
      </motion.div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* ADVANTAGE SECTION COMPONENT                                                */
/* -------------------------------------------------------------------------- */
export const AdvantageSection = () => {
  const cards = [
    {
      icon: <RotateCw size={18} />,
      numTag: "01 / BIOMECHANICS",
      title: "BIOMECHANICAL LAB",
      desc: "3D high-speed motion capture and dual kinematic force plate analysis reveal asymmetries, velocity thresholds, and power transfer efficiency in real time.",
      footerText: "KISTLER FORCE LABS"
    },
    {
      icon: <Snowflake size={18} />,
      numTag: "02 / PHYSIOLOGY",
      title: "CRYO & HYPERBARIC",
      desc: "Full-spectrum cold immersion plunge suites (-160°F cryo chambers), medical-grade 2.0 ATA hyperbaric oxygen therapy, and pneumatic lymphatic boots.",
      footerText: "SUB-ZERO REPAIR"
    },
    {
      icon: <Award size={18} />,
      numTag: "03 / HUMAN TALENT",
      title: "ELITE TIER COACHES",
      desc: "Direct 1-on-1 mentorship directed exclusively by former Olympic strength directors, neuromuscular specialists, and doctorates in exercise physiology.",
      footerText: "OLYMPIC CADRE"
    },
    {
      icon: <Network size={18} />,
      numTag: "04 / CONNECTED CLOUD",
      title: "CONNECTED ECOSYSTEM",
      desc: "Continuous autonomic nervous system analysis dynamically adjusting daily barbell loads, sauna thermal exposure, and restorative recovery protocols.",
      footerText: "WHOOP / APPLE SYNC"
    }
  ];

  return (
    <section className="advantage-section">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="section-header-flex"
      >
        <div>
          <span className="section-pre-title">— TECHNOLOGICAL PRECISION</span>
          <h2 className="section-title">THE PULSE360 <br />ADVANTAGE</h2>
          <p className="section-desc">
            Engineered for uncompromising human performance through integrated biological telemetry and clinical recovery sciences.
          </p>
        </div>
        <div className="protocol-badge">
          SYSTEM PROTOCOL [v4.82]
        </div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="cards-grid-4"
      >
        {cards.map((card, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.2 } }} 
            className="adv-card"
          >
            <div className="card-top-icon">{card.icon}</div>
            <span className="card-tag">{card.numTag}</span>
            <h3 className="card-heading">{card.title}</h3>
            <p className="card-text">{card.desc}</p>
            
            <div className="card-footer">
              <span>{card.footerText}</span>
              <ArrowUpRight size={16} className="card-arrow" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <MediaGallerySection />
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* MEDIA GALLERY SECTION                                                     */
/* -------------------------------------------------------------------------- */
export const MediaGallerySection = () => {
  const mediaItems = [
    {
      videoSrc: card1Video,
      tag: "ZONE ALPHA",
      title: "HEAVY BIOMECHANICAL CONDITIONING GRID",
      subTag: "BAY 01-14"
    },
    {
      videoSrc: card2Video,
      tag: "RECOVERY PAVILION",
      title: "HYDRO-THERMAL CRYO BATHS",
      subTag: "SUITE B"
    },
    {
      videoSrc: card3Video,
      tag: "NEUROMUSCULAR LAB",
      title: "HIGH-VELOCITY STRENGTH SUITE",
      subTag: "ZONE 03"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [mediaItems.length]);

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="media-section-container"
    >
      <div className="media-grid">
        {mediaItems.map((item, index) => (
          <div 
            key={index} 
            className={`media-box ${activeIndex === index ? "active-card" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <video className="media-video" autoPlay loop muted playsInline key={item.videoSrc}>
              <source src={item.videoSrc} type="video/mp4" />
            </video>
            <div className="media-overlay"></div>
            
            <div className="media-content">
              <span className="media-tag">{item.tag}</span>
              <h3 className="media-title">{item.title}</h3>
            </div>
            {item.subTag && <span className="media-right-tag">{item.subTag}</span>}
          </div>
        ))}
      </div>

      <div className="media-dots">
        {mediaItems.map((_, dotIdx) => (
          <button
            key={dotIdx}
            className={`dot ${activeIndex === dotIdx ? "active-dot" : ""}`}
            onClick={() => setActiveIndex(dotIdx)}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/* PRICING SECTION COMPONENT                                                  */
/* -------------------------------------------------------------------------- */
export const PricingSection = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    // Navigate to contact page while passing selected plan data
    navigate("/contact", { 
      state: { 
        selectedPlan: plan.title, 
        price: plan.price 
      } 
    });
  };

  const plans = [
    {
      category: "FOUNDATIONAL TIER",
      title: "CORE PERFORMANCE",
      desc: "Full unrestricted access to high-performance strength floors and foundational recovery.",
      price: "$185",
      period: "/ MONTH",
      featured: false,
      buttonText: "SELECT MEMBERSHIP",
      buttonIcon: <ArrowRight size={16} />,
      features: [
        "Unlimited 24/7 Access to Athletic Training Ground",
        "Bio-Hydrotherapy Hot/Cold Contrast Plunges",
        "Pulse360 Mobile Biometric Companion & Load Tracker",
        "Luxury Locker Suites & Malin+Goetz Grooming"
      ]
    },
    {
      badge: "MOST POPULAR",
      category: "RECOMMENDED PRECISION",
      title: "PRO ATHLETE",
      desc: "Engineered for competitive amateurs, marathoners, and hyper-focused executives.",
      price: "$275",
      period: "/ MONTH",
      featured: true,
      buttonText: "SELECT MEMBERSHIP",
      buttonIcon: <Zap size={16} fill="currentColor" />,
      features: [
        "All Core Performance Features Included",
        "Unlimited High-Intensity Biometric & Mobility Labs",
        "Monthly Clinical DEXA Body Scan & Metabolic Profiling",
        "2 Monthly Dedicated Neuromuscular Coaching Sessions",
        "Normatec 3 Lymphatic Recovery Lounge Privileges"
      ]
    },
    {
      category: "VIP SOVEREIGN ACCESS",
      title: "BLACK OBSIDIAN",
      desc: "The pinnacle of private athletic concierge, personalized physiology, and hospitality.",
      price: "$450",
      period: "/ MONTH",
      featured: false,
      buttonText: "SELECT MEMBERSHIP",
      buttonIcon: <ArrowRight size={16} />,
      features: [
        "All Pro Athlete Privileges Included",
        "Private Sound-Isolated VIP Training Chambers",
        "Dedicated Sports Scientist & Biochemist Telehealth",
        "Executive Valet Parking, Daily Laundry & Kit Refresh",
        "Hyperbaric 2.0 ATA Clinical Chamber Unlimited Access"
      ]
    }
  ];

  return (
    <section id="pricing-section" className="pricing-section">
      {/* 1. Header Animation Re-added */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="pricing-header"
      >
        <span className="pricing-badge-top">MEMBERSHIP TIERS</span>
        <h2 className="pricing-title">
          UNLOCK UNRIVALED <br /> POTENTIAL
        </h2>
        <p className="pricing-subtitle">
          Calibrated entry tiers for elite performance seekers. Every tier includes access to our signature athletic sanctuary and proprietary biometric tracking.
        </p>
      </motion.div>

      {/* 2. Grid with Staggered Card Animations */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="pricing-grid"
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`price-card ${plan.featured ? "featured-card" : ""}`}
          >
            {plan.featured && (
              <div className="most-popular-pill">{plan.badge}</div>
            )}

            <span className="card-category">{plan.category}</span>
            <h3 className="card-title">{plan.title}</h3>
            <p className="card-desc">{plan.desc}</p>

            <div className="price-box">
              <span className="price-num">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </div>

            <ul className="pricing-feature-list">
              {plan.features.map((feat, fIdx) => (
                <li key={fIdx}>
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSelectPlan(plan)}
              className={`pricing-btn ${
                plan.featured ? "btn-neon" : "btn-dark"
              }`}
            >
              <span>{plan.buttonText}</span>
              {plan.buttonIcon}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* 3. Bottom Guarantee Banner Animation */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="guarantee-banner"
      >
        <ShieldCheck size={28} className="guarantee-icon" />
        <div className="guarantee-text">
          <h4>30-DAY UNCONDITIONAL ATHLETIC GUARANTEE</h4>
          <p>
            If your physical VO2 telemetry does not reflect demonstrable adaptation within 30 days, claim a 100% full refund immediately.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* CALL TO ACTION BANNER                                                      */
/* -------------------------------------------------------------------------- */
export const CTABanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    timeWindow: "Midday (11:00 - 14:00)",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = () => {
    setSubmissionStatus(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "24d5df8e-883b-4bc3-a7d3-78ae72381473",
          subject: `New $29 VIP Tour Pass Booking - ${formData.fullName}`,
          from_name: "Pulse360 VIP Tour Intake",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.preferredDate,
          timeWindow: formData.timeWindow,
          passType: "$29 VIP ENTRY PASS (DEXA Included)",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          preferredDate: "",
          timeWindow: "Midday (11:00 - 14:00)",
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ORIGINAL BANNER SECTION - UNTOUCHED */}
      <section className="cta-container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="cta-banner-card"
        >
          <div className="cta-content-left">
            <span className="cta-pre-title">
              PRIVATE TOUR AVAILABILITY: 4 SLOTS REMAINING TODAY
            </span>
            <h2 className="cta-heading">
              STEP INTO THE FUTURE OF <br /> HUMAN POWER
            </h2>
            <p className="cta-description">
              Claim your complimentary high-density physiological assessment, DEXA body composition scan, and 7-day facility key.
            </p>
          </div>

          <div className="cta-actions-right">
            {/* Primary Button Opens Modal */}
            <button className="cta-btn-primary" onClick={handleOpenModal}>
              <span>SCHEDULE DIAGNOSTIC</span>
              <Calendar size={18} className="cta-icon" />
            </button>
            
            {/* Secondary Button Opens Same Modal */}
            <button className="cta-btn-secondary" onClick={handleOpenModal}>
              SPEAK WITH PERFORMANCE DIRECTOR
            </button>
          </div>
        </motion.div>
      </section>

      {/* MODAL POPUP (EXACT MATCH TO YOUR UI SCREENSHOT) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="tour-modal-overlay" onClick={handleCloseModal}>
            <motion.div 
              className="tour-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top System Tag & Close Button */}
              <div className="tour-modal-topbar">
                <span className="sys-code">SYS://SECURE-INTAKE_v4.2</span>
                <button className="tour-modal-close" onClick={handleCloseModal}>
                  <X size={18} />
                </button>
              </div>

              {/* Badge */}
              <div className="tour-pill-badge">
                <span>SCHEDULE ON-SITE DIAGNOSTIC</span>
              </div>

              {/* Main Heading & Subtitle */}
              <h2 className="tour-modal-title">
                RESERVE YOUR PRIVATE FACILITY TOUR
              </h2>
              <p className="tour-modal-subtitle">
                Experience our high-tech telemetry lab, receive a complimentary DEXA body scan, and consult with our Performance Director.
              </p>

              {/* $29 VIP Pass Highlight Box */}
              <div className="vip-pass-card">
                <div className="vip-pass-header">
                  <div className="vip-price-title">
                    <span className="price-accent">$29 VIP</span>
                    <span className="price-accent">ENTRY</span>
                    <span className="price-accent">PASS</span>
                  </div>
                  <div className="vip-badge-group">
                    <span className="guaranteed-badge">
                      GUARANTEED <br /> ALL-ACCESS
                    </span>
                    <span className="credit-text">
                      (Fully credited upon <br /> membership enrollment)
                    </span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="vip-features-list">
                  <div className="vip-feature-item">
                    <div className="check-icon-box"><Check size={12} /></div>
                    <span>Complimentary DEXA Biometric Scan <strong>($450 Value Included)</strong></span>
                  </div>
                  <div className="vip-feature-item">
                    <div className="check-icon-box"><Check size={12} /></div>
                    <span><strong>1-on-1 Health & Plan Strategy Session</strong> with Performance Director</span>
                  </div>
                  <div className="vip-feature-item">
                    <div className="check-icon-box"><Check size={12} /></div>
                    <span><strong>Full Day Access</strong> to Hydrotherapy & Recovery Suite</span>
                  </div>
                </div>
              </div>

              {/* Feedback Alerts */}
              {submissionStatus === "success" && (
                <div className="form-alert alert-success">
                  <CheckCircle2 size={16} />
                  <span>VIP Pass Reserved! Our team will send instant SMS & email confirmation.</span>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="form-alert alert-error">
                  <AlertCircle size={16} />
                  <span>Submission failed. Please verify your connection or try again.</span>
                </div>
              )}

              {/* Intake Form */}
              <form onSubmit={handleSubmit} className="tour-modal-form">
                {/* Full Name */}
                <div className="tour-form-group">
                  <div className="label-row">
                    <label>FULL NAME</label>
                    <span className="required-tag">REQUIRED</span>
                  </div>
                  <div className="tour-input-wrapper">
                    <input 
                      type="text" 
                      name="fullName" 
                      required
                      placeholder="Marcus Vance"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <User size={16} className="tour-input-icon" />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="tour-form-row">
                  <div className="tour-form-group">
                    <label>EMAIL ADDRESS</label>
                    <div className="tour-input-wrapper">
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="marcus.vance@performance.io"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Mail size={16} className="tour-input-icon" />
                    </div>
                  </div>

                  <div className="tour-form-group">
                    <label>PHONE NUMBER (MOBILE)</label>
                    <div className="tour-input-wrapper">
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        placeholder="+1 (212) 849-3600"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <Phone size={16} className="tour-input-icon" />
                    </div>
                  </div>
                </div>

                {/* Preferred Date & Time Window Row */}
                <div className="tour-form-row">
                  <div className="tour-form-group">
                    <label>PREFERRED DATE</label>
                    <div className="tour-input-wrapper">
                      <input 
                        type="date" 
                        name="preferredDate" 
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="tour-form-group">
                    <label>TIME WINDOW</label>
                    <div className="tour-input-wrapper">
                      <select 
                        name="timeWindow" 
                        value={formData.timeWindow}
                        onChange={handleChange}
                      >
                        <option value="Morning (08:00 - 11:00)">Morning (08:00 - 11:00)</option>
                        <option value="Midday (11:00 - 14:00)">Midday (11:00 - 14:00)</option>
                        <option value="Afternoon (14:00 - 18:00)">Afternoon (14:00 - 18:00)</option>
                        <option value="Evening (18:00 - 21:00)">Evening (18:00 - 21:00)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Neon CTA Submit Button */}
                <button type="submit" className="tour-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span>TRANSMITTING TELEMETRY...</span>
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>CONFIRM VIP TOUR PASS ($29)</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>

              {/* Modal Footer Security Badges */}
              <div className="tour-modal-footer">
                <span><ShieldCheck size={12} /> 256-Bit Encrypted Telemetry</span>
                <span>Instant Calendar Sync</span>
                <span className="highlight-text">• 100% Risk-Free Guarantee</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/* MAIN HOME PAGE COMPONENT                                                   */
/* -------------------------------------------------------------------------- */
export default function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      <AdvantageSection />
      <PricingSection />
      <CTABanner />
    </div>
  );
}