import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Maximize2, 
  Users, 
  TrendingUp, 
  Zap, 
  Share2, 
  FlaskConical, 
  Compass, 
  Gem, 
  ArrowRight, 
  Calendar,
  Award,
  Dumbbell, 
  Gauge, 
  Activity, 
  Radio,
  X,
  User,  
  Mail, 
  Phone, 
  Check, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck
} from "lucide-react";
import "./AboutUs.css";
import gymTourVideo from "../assets/gym-tour.mp4";

/* 1. HERO SECTION */
export const AboutHero = () => {
  const statsData = [
    {
      label: "TOTAL FOOTPRINT",
      value: "100K+",
      subText: "SQ FT PREMIUM FLOORS",
      desc: "Engineered acoustic sub-floors with synchronized biomechanical capture zones.",
      icon: <Maximize2 className="stat-lucide-icon" size={18} />
    },
    {
      label: "HUMAN CAPITAL",
      value: "45+",
      subText: "ELITE CERTIFIED COACHES",
      desc: "PhDs, Olympians, and master kinetic therapists operating unified program schedules.",
      icon: <Users className="stat-lucide-icon" size={18} />
    },
    {
      label: "EFFICACY INDEX",
      value: "99.1%",
      subText: "GOAL ACHIEVEMENT RATE",
      desc: "Bi-weekly dynamic re-evaluations guaranteeing progression across target KPIs.",
      icon: <TrendingUp className="stat-lucide-icon" size={18} />
    },
    {
      label: "TOLERANCE STANDARD",
      value: "ZERO",
      subText: "FACILITY COMPROMISES",
      desc: "Dual-source cryotherapy, hyperbaric oxygen chambers, and AI force plates.",
      icon: <Zap className="stat-lucide-icon" size={18} />
    }
  ];

  return (
    <section className="about-hero-section">
      {/* Background Video */}
      <video 
        className="hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={gymTourVideo} type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay text readability ke liye */}
      <div className="hero-video-overlay"></div>

      <div className="about-hero-container">
        
        {/* Top Tag Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="about-hero-tag"
        >
          <span className="tag-dot"></span>
          THE PULSE360 PHILOSOPHY
        </motion.div>

        {/* Title and Description Stagger Animation */}
        <div className="about-hero-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-hero-title-box"
          >
            <h1 className="about-hero-title">
              BUILT FOR<br />
              THE<br />
              <span className="accent-text">RELENTLESS.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-hero-desc-box"
          >
            <div className="system-directive">
              <Share2 size={14} className="directive-icon" /> SYSTEM DIRECTIVE // REV-04
            </div>
            <p className="about-hero-desc">
              Founded in 2021 by sports physiologists and endurance champions, 
              Pulse360 was built on a singular conviction: luxury and elite athletic 
              rigor should never be mutually exclusive. We eliminate guesswork with 
              empirical data, precision biomechanics, and world-class recovery.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid Cards Entrance Animation */}
        <div className="about-stats-grid">
          {statsData.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="about-stat-card"
            >
              <div className="stat-card-header">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-icon-wrapper">{stat.icon}</span>
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-subtext">{stat.subText}</div>
              <p className="stat-desc">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* 2. PILLARS SECTION */
export const ArchitecturalPillars = () => {
  const pillarsData = [
    {
      number: "PILLAR 01",
      title: "EMPIRICAL SCIENCE",
      desc: "We abandon subjective fatigue indicators. Training loads, metabolic splits, and neuromuscular adaptations are dictated by real-time VO2 sub-max gas analysis, blood lactate profiling, and 3D kinetic telemetry.",
      linkText: "PRECISION PROTOCOLS",
      icon: <FlaskConical size={22} className="pillar-icon-svg" />
    },
    {
      number: "PILLAR 02",
      title: "ARCHITECTURAL LUXURY",
      desc: "Designed as a sanctuary for intense focus. Acoustic-damped monolithic stone halls, HEPA-filtered hyper-oxygenated microclimates, private biometric check-in pods, and Scandinavian cryo-sauna suites.",
      linkText: "SANCTUARY DESIGN",
      icon: <Compass size={22} className="pillar-icon-svg" />
    },
    {
      number: "PILLAR 03",
      title: "ELITE COHORT",
      desc: "An unyielding ecosystem of tech founders, competitive athletes, and peak operators. Mutual respect forged in rigorous sweat, with zero tolerance for distractions and complete dedication to self-mastery.",
      linkText: "VETTED NETWORK",
      icon: <Gem size={22} className="pillar-icon-svg" />
    }
  ];

  return (
    <section className="pillars-section">
      <div className="pillars-container">
        
        {/* Section Header */}
        <div className="pillars-header">
          <div className="pillars-title-box">
            <span className="pillars-subtag">TRIPOD OF EXCELLENCE</span>
            <h2 className="pillars-main-title">OUR ARCHITECTURAL PILLARS</h2>
          </div>
          <p className="pillars-header-desc">
            Every session, consultation, and recovery protocol is anchored by our triple-spectrum standard.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="pillars-grid">
          {pillarsData.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="pillar-card"
            >
              <div className="pillar-top-border"></div>

              <div className="pillar-icon-wrapper">
                {pillar.icon}
              </div>

              <span className="pillar-number">{pillar.number}</span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>

              <div className="pillar-footer">
                <span className="pillar-link-text">{pillar.linkText}</span>
                <ArrowRight size={16} className="pillar-arrow-icon" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* 3. HEAD MASTERS SECTION */
export const HeadMasters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    timeWindow: "Midday (11:00 - 14:00)",
  });

  const coachesData = [
    {
      code: "STR-01",
      name: "MARCUS VANCE",
      role: "HEAD OF STRENGTH & CONDITIONING",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600",
      credentials: "Ex-Olympic Weightlifting Coach, CSCS*D, M.Sc Kinesiology",
      specialization: "Hypertrophy, Neuromuscular Power & Powerlifting",
      quote: "“Discipline isn't punishment; it's the ultimate form of self-respect.”",
      stat1Label: "TENURE",
      stat1Value: "12 Yrs Elite",
      stat2Label: "ATHLETES",
      stat2Value: "1,400+ Primed"
    },
    {
      code: "KNT-02",
      name: "ELENA ROSTOVA",
      role: "DIRECTOR OF FUNCTIONAL MOVEMENT",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600",
      credentials: "Doctor of Physical Therapy (DPT), FRC Specialist",
      specialization: "Joint Longevity, Kinetic Restoration & Agility",
      quote: "“True power begins with structural freedom and kinetic harmony.”",
      stat1Label: "PEDIGREE",
      stat1Value: "Nat. Gymnast",
      stat2Label: "PUBLICATION",
      stat2Value: "“Kinetic Freedom”"
    },
    {
      code: "MET-03",
      name: "JULIAN THORNE",
      role: "MASTER COACH — METABOLIC SYSTEMS",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600",
      credentials: "Ironman 70.3 World Qualifier, EXOS Performance Spec.",
      specialization: "VO2 Max Amplification & Lactate Conditioning",
      quote: "“When your mind asks to stop, that's where the transformation begins.”",
      stat1Label: "INSTRUCTION",
      stat1Value: "10,000+ Hrs",
      stat2Label: "DISCIPLINE",
      stat2Value: "Bioenergetics"
    }
  ];

  const handleOpenModal = (coachName) => {
    setSelectedCoach(coachName);
    setSubmissionStatus(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          subject: `1-on-1 Consultation Booking (${selectedCoach}) - ${formData.fullName}`,
          from_name: "Pulse360 Consultation Intake",
          coachName: selectedCoach,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.preferredDate,
          timeWindow: formData.timeWindow,
          passType: "1-ON-1 COACH CONSULTATION",
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
      <section className="masters-section">
        <div className="masters-container">
          
          {/* Header */}
          <div className="masters-header">
            <div className="masters-title-box">
              <span className="masters-subtag">FACULTY OF HUMAN KINETICS</span>
              <h2 className="masters-main-title">MEET THE HEAD MASTERS</h2>
            </div>
            <p className="masters-header-desc">
              World-class minds sculpting peak human capability through biomechanical rigor and bio-hacking methodology.
            </p>
          </div>

          {/* Coaches Cards Grid */}
          <div className="masters-grid">
            {coachesData.map((coach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="coach-card"
              >
                {/* Image Banner */}
                <div className="coach-image-container">
                  <span className="coach-code-badge">{coach.code}</span>
                  <img src={coach.image} alt={coach.name} className="coach-image" />
                  <div className="coach-image-overlay"></div>
                </div>

                {/* Body Content */}
                <div className="coach-card-body">
                  <h3 className="coach-name">{coach.name}</h3>
                  <span className="coach-role">{coach.role}</span>

                  <div className="coach-meta-block">
                    <span className="meta-label">CREDENTIALS</span>
                    <p className="meta-text">{coach.credentials}</p>
                  </div>

                  <div className="coach-meta-block">
                    <span className="meta-label">SPECIALIZATION</span>
                    <p className="meta-text">{coach.specialization}</p>
                  </div>

                  <p className="coach-quote">{coach.quote}</p>

                  {/* Stat Box */}
                  <div className="coach-stats-box">
                    <div className="coach-stat-col">
                      <span className="stat-meta-label">{coach.stat1Label}</span>
                      <span className="stat-meta-value">{coach.stat1Value}</span>
                    </div>
                    <div className="coach-stat-col">
                      <span className="stat-meta-label">{coach.stat2Label}</span>
                      <span className="stat-meta-value accent-stat">{coach.stat2Value}</span>
                    </div>
                  </div>

                  {/* Button linked to modal */}
                  <button 
                    className="coach-btn" 
                    onClick={() => handleOpenModal(coach.name)}
                  >
                    <span>BOOK 1-ON-1 CONSULTATION</span>
                    <Calendar size={14} className="btn-icon" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal Popup */}
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
              <div className="tour-modal-topbar">
                <span className="sys-code">SYS://CONSULTATION-INTAKE_v4.2</span>
                <button className="tour-modal-close" onClick={handleCloseModal}>
                  <X size={18} />
                </button>
              </div>

              <div className="tour-pill-badge">
                <span>1-ON-1 COACH CONSULTATION</span>
              </div>

              <h2 className="tour-modal-title">
                BOOK WITH {selectedCoach}
              </h2>
              <p className="tour-modal-subtitle">
                Reserve a dedicated performance evaluation session with our master faculty member.
              </p>

              <div className="vip-pass-card">
                <div className="vip-pass-header">
                  <div className="vip-price-title">
                    <span className="price-accent">PRIVATE</span>
                    <span className="price-accent">1-ON-1</span>
                    <span className="price-accent">SESSION</span>
                  </div>
                  <div className="vip-badge-group">
                    <span className="guaranteed-badge">
                      DIRECT <br /> ACCESS
                    </span>
                    <span className="credit-text">
                      (Personalized Bio-Plan <br /> included)
                    </span>
                  </div>
                </div>

                <div className="vip-features-list">
                  <div className="vip-feature-item">
                    <div className="check-icon-box"><Check size={12} /></div>
                    <span>Complete Kinematic & Movement Diagnostic</span>
                  </div>
                  <div className="vip-feature-item">
                    <div className="check-icon-box"><Check size={12} /></div>
                    <span>Tailored Athletic Performance Roadmap</span>
                  </div>
                </div>
              </div>

              {submissionStatus === "success" && (
                <div className="form-alert alert-success">
                  <CheckCircle2 size={16} />
                  <span>Consultation Requested! We will confirm your slot via SMS/Email.</span>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="form-alert alert-error">
                  <AlertCircle size={16} />
                  <span>Submission failed. Please check your network and try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="tour-modal-form">
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

                <button type="submit" className="tour-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span>TRANSMITTING TELEMETRY...</span>
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>CONFIRM CONSULTATION REQUEST</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>

              <div className="tour-modal-footer">
                <span><ShieldCheck size={12} /> 256-Bit Encrypted Telemetry</span>
                <span>Instant Calendar Sync</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

/* 4. ACCREDITATIONS SECTION */
export const Accreditations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    timeWindow: "Midday (11:00 - 14:00)",
  });

  const accreditationsData = [
    {
      title: "NSCA",
      subTag: "RECOGNIZED FACILITY",
      desc: "Certified Strength and Conditioning Specialist institutional alignment.",
      icon: <Award size={20} className="accred-icon" />
    },
    {
      title: "USAW",
      subTag: "HIGH PERFORMANCE CLUB",
      desc: "Sanctioned Olympic weightlifting platforms and IWF-certified precision bars.",
      icon: <Dumbbell size={20} className="accred-icon" />
    },
    {
      title: "EXOS",
      subTag: "METHODOLOGY PARTNER",
      desc: "Integrated tactical periodization and pro-athlete kinetic readiness pipelines.",
      icon: <Gauge size={20} className="accred-icon" />
    },
    {
      title: "ACSM",
      subTag: "CLINICAL STANDARD",
      desc: "American College of Sports Medicine research-backed physiological safety.",
      icon: <Activity size={20} className="accred-icon" />
    }
  ];

  const handleOpenModal = () => {
    setSubmissionStatus(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          subject: `VIP Facility Tour Booking ($29) - ${formData.fullName}`,
          from_name: "Pulse360 VIP Tour Intake",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.preferredDate,
          timeWindow: formData.timeWindow,
          passType: "$29 VIP ENTRY PASS",
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
      <section className="accred-section">
        <div className="accred-container">
          
          {/* Header */}
          <div className="accred-header">
            <div className="accred-title-box">
              <span className="accred-subtag">VERIFIED EXCELLENCE</span>
              <h2 className="accred-main-title">INSTITUTIONAL ACCREDITATIONS</h2>
            </div>
            <span className="accred-header-badge">
              STANDARDS COMMISSION // 2024 VALIDATED
            </span>
          </div>

          {/* 4 Cards Grid */}
          <div className="accred-grid">
            {accreditationsData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="accred-card"
              >
                <div className="accred-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="accred-card-title">{item.title}</h3>
                <span className="accred-card-subtag">{item.subTag}</span>
                <p className="accred-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="bio-grid-banner">
            <div className="bio-grid-info">
              <div className="radio-icon-wrapper">
                <Radio size={18} className="radio-icon" />
              </div>
              <div className="bio-grid-text-group">
                <h4 className="bio-grid-title">FACILITY BIO-GRID ACTIVE</h4>
                <p className="bio-grid-metrics">
                  Oxygen Concentration: 21.8% • Ambient Temp: 19.5°C • Active Sensor Nodes: 128/128
                </p>
              </div>
            </div>
            <button className="tour-btn" onClick={handleOpenModal}>
              TOUR THE FACILITY
            </button>
          </div>

        </div>
      </section>

      {/* VIP Facility Tour Modal Popup ($29 Pass) */}
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
              <div className="tour-modal-topbar">
                <span className="sys-code">SYS://SECURE-INTAKE_v4.2</span>
                <button className="tour-modal-close" onClick={handleCloseModal}>
                  <X size={18} />
                </button>
              </div>

              <div className="tour-pill-badge">
                <span>SCHEDULE ON-SITE DIAGNOSTIC</span>
              </div>

              <h2 className="tour-modal-title">
                RESERVE YOUR PRIVATE FACILITY TOUR
              </h2>
              <p className="tour-modal-subtitle">
                Experience our high-tech telemetry lab, receive a complimentary DEXA body scan, and consult with our Performance Director.
              </p>

              <div className="vip-pass-card">
                <div className="vip-pass-header">
                  <div className="vip-price-title">
                    <span className="price-accent">$29</span> VIP ENTRY PASS
                  </div>
                  <div className="vip-badge-group">
                    <span className="guaranteed-badge">GUARANTEED ALL-ACCESS</span>
                    <span className="credit-text">(Fully credited upon membership enrollment)</span>
                  </div>
                </div>

                <div className="vip-features-list">
                  <div className="vip-feature-item">
                    <div className="check-icon-box"><Check size={12} /></div>
                    <span>Complimentary DEXA Biometric Scan <strong>($450 Value Included)</strong></span>
                  </div>
                  <div className="vip-feature-item">
                    <div className="check-icon-box"><Check size={12} /></div>
                    <span>1-on-1 Health & Plan Strategy Session with Performance Director</span>
                  </div>
                  <div className="vip-feature-item">
                    <div className="check-icon-box"><Check size={12} /></div>
                    <span>Full Day Access to Hydrotherapy & Recovery Suite</span>
                  </div>
                </div>
              </div>

              {submissionStatus === "success" && (
                <div className="form-alert alert-success">
                  <CheckCircle2 size={16} />
                  <span>VIP Pass Reserved! We will confirm your slot via SMS/Email.</span>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="form-alert alert-error">
                  <AlertCircle size={16} />
                  <span>Submission failed. Please check your network and try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="tour-modal-form">
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

              <div className="tour-modal-footer">
                <span><ShieldCheck size={12} /> 256-Bit Encrypted Telemetry</span>
                <span>Instant Calendar Sync</span>
                <span>100% Risk-Free Guarantee</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

/* 5. MAIN PAGE EXPORT */
export default function AboutUs() {
  return (
    <div className="about-us-page">
      <AboutHero />
      <ArchitecturalPillars />
      <HeadMasters />
      <Accreditations />
    </div>
  );
}