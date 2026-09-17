import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { 
  ShieldCheck,
  Zap, 
  Key, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  PhoneCall, 
  Lock, 
  ArrowRight, 
  ExternalLink,
  Car,
  Wind,
  Flame,
  CupSoda,
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import "./ContactUs.css";
import gymTourVideo from "../assets/gym-tour.mp4";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const ContactHero = () => {
  return (
    <section className="contact-hero-section">
      {/* Background Video */}
      <video
        className="contact-hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={gymTourVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video for readability */}
      <div className="contact-hero-overlay"></div>

      {/* Main Content */}
      <motion.div 
        className="contact-hero-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Top Pill Badge */}
        <div className="contact-pill-badge">
          <span className="pill-dot"></span>
          <span>GET IN TOUCH</span>
        </div>

        {/* Main Extended Heading */}
        <h1 className="contact-hero-title">
          <span className="title-white">CONNECT</span>
          <br />
          <span className="title-white">WITH</span>
          <br />
          <span className="title-neon">PULSE360</span>
        </h1>

        {/* Subtitle */}
        <p className="contact-hero-subtitle">
          Schedule your VIP tour, speak with a master coach, or reserve your biometric <br />
          consultation.
        </p>

        {/* Features / Guarantees Row */}
        <div className="contact-features-row">
          <div className="contact-feature-item">
            <ShieldCheck size={16} className="feature-neon-icon" />
            <span>HIPAA-Compliant Telemetry</span>
          </div>

          <div className="contact-feature-item">
            <Zap size={16} className="feature-neon-icon" />
            <span>Sub-10 Min Response Dispatch</span>
          </div>

          <div className="contact-feature-item">
            <Key size={16} className="feature-neon-icon" />
            <span>Tier-1 Security Protocol</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const ContactFormSection = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedTier: "CORE PERFORMANCE ($185/mo)",
    protocol: "Elite Strength & Hypertrophy",
    tourWindow: "Morning (06:00 - 11:00)",
    requirements: "",
    includeScan: true,
  });

  // Automatically update form state when navigated from pricing card
  useEffect(() => {
    if (location.state && location.state.selectedPlan) {
      const planName = location.state.selectedPlan;
      const planPrice = location.state.price ? ` (${location.state.price}/mo)` : "";
      
      setFormData((prev) => ({
        ...prev,
        selectedTier: `${planName}${planPrice}`,
      }));
    }
  }, [location.state]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Client-Side Input Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full legal name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "24d5df8e-883b-4bc3-a7d3-78ae72381473",
          subject: `New VIP ${formData.selectedTier} Inquiry from ${formData.fullName}`,
          from_name: "Pulse360 Intake Form",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          selectedTier: formData.selectedTier,
          protocol: formData.protocol,
          tourWindow: formData.tourWindow,
          requirements: formData.requirements || "N/A",
          includeScan: formData.includeScan ? "Yes" : "No",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          selectedTier: "CORE PERFORMANCE ($185/mo)",
          protocol: "Elite Strength & Hypertrophy",
          tourWindow: "Morning (06:00 - 11:00)",
          requirements: "",
          includeScan: true,
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        
        {/* LEFT COLUMN: DIRECT INTAKE FORM */}
        <div className="form-card">
          <div className="form-card-header">
            <div>
              <span className="badge-sub-title">DIRECT INTAKE</span>
              <h2 className="form-title">
                REQUEST A PRIVATE ADMISSION <br />
                & TOUR
              </h2>
            </div>
            <div className="priority-badge">
              <span>FLAGSHIP</span>
              <span>QUEUE</span>
              <span className="neon-text">PRIORITY</span>
              <span className="neon-text">ACCESS</span>
            </div>
          </div>

          {/* Alert Status Feedback */}
          {submissionStatus === "success" && (
            <div style={{
              padding: "12px 16px",
              marginBottom: "20px",
              borderRadius: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid #10b981",
              color: "#10b981",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px"
            }}>
              <CheckCircle2 size={18} />
              <span>Inquiry submitted successfully! Our concierge team will reach out to you shortly.</span>
            </div>
          )}

          {submissionStatus === "error" && (
            <div style={{
              padding: "12px 16px",
              marginBottom: "20px",
              borderRadius: "8px",
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              border: "1px solid #ef4444",
              color: "#ef4444",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px"
            }}>
              <AlertCircle size={18} />
              <span>Failed to send inquiry. Please try again or contact us directly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="intake-form" noValidate>
            {/* Selected Tier Dropdown */}
            <div className="form-group">
              <label>SELECTED MEMBERSHIP TIER</label>
              <select
                name="selectedTier"
                value={formData.selectedTier}
                onChange={handleChange}
              >
                <option value="CORE PERFORMANCE ($185/mo)">CORE PERFORMANCE — $185 / Month</option>
                <option value="PRO ATHLETE ($275/mo)">PRO ATHLETE — $275 / Month</option>
                <option value="BLACK OBSIDIAN ($450/mo)">BLACK OBSIDIAN — $450 / Month</option>
              </select>
            </div>

            {/* Full Legal Name */}
            <div className="form-group">
              <label>FULL LEGAL NAME</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Marcus Vance, Olympic Athlete / Exec"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={errors.fullName ? { borderColor: "#ef4444" } : {}}
                />
                <User size={16} className="input-icon" />
              </div>
              {errors.fullName && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.fullName}</span>}
            </div>

            {/* Email & Phone Row */}
            <div className="form-row">
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="marcus@vance.holdings"
                    value={formData.email}
                    onChange={handleChange}
                    style={errors.email ? { borderColor: "#ef4444" } : {}}
                  />
                  <Mail size={16} className="input-icon" />
                </div>
                {errors.email && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>PHONE NUMBER (MOBILE)</label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (917) 000-3600"
                    value={formData.phone}
                    onChange={handleChange}
                    style={errors.phone ? { borderColor: "#ef4444" } : {}}
                  />
                  <Phone size={16} className="input-icon" />
                </div>
                {errors.phone && <span style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.phone}</span>}
              </div>
            </div>

            {/* Protocol & Tour Window Row */}
            <div className="form-row">
              <div className="form-group">
                <label>PRIMARY FOCUS PROTOCOL</label>
                <select
                  name="protocol"
                  value={formData.protocol}
                  onChange={handleChange}
                >
                  <option value="Elite Strength & Hypertrophy">Elite Strength & Hypertrophy</option>
                  <option value="Metabolic Recomposition">Metabolic Recomposition</option>
                  <option value="Athletic Power & Mobility">Athletic Power & Mobility</option>
                  <option value="Executive Bio-Hacking">Executive Bio-Hacking</option>
                </select>
              </div>

              <div className="form-group">
                <label>PREFERRED TOUR WINDOW</label>
                <select
                  name="tourWindow"
                  value={formData.tourWindow}
                  onChange={handleChange}
                >
                  <option value="Morning (06:00 - 11:00)">Morning (06:00 - 11:00)</option>
                  <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 - 16:00)</option>
                  <option value="Evening (17:00 - 21:00)">Evening (17:00 - 21:00)</option>
                </select>
              </div>
            </div>

            {/* Special Requirements */}
            <div className="form-group">
              <label>SPECIAL REQUIREMENTS OR BIO-HACKING PROFILE</label>
              <textarea
                name="requirements"
                rows="3"
                placeholder="Tell our Master Concierge about previous cardiovascular telemetry, orthopedic flags, or targeted athletic deadlines..."
                value={formData.requirements}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Checkbox Card */}
            <div className="checkbox-card">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="includeScan"
                  checked={formData.includeScan}
                  onChange={handleChange}
                />
                <span className="checkbox-title">Include Complimentary 3D Biometric Body Scan</span>
              </label>
              <p className="checkbox-desc">
                Full DEXA-equivalent infrared density metrics, VO2 max estimation, and nervous system recovery screening ($450 value, included for verified applicants).
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span>TRANSMITTING DATA...</span>
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  <span>SUBMIT INQUIRY & RESERVE TOUR</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            {/* Form Footer info */}
            <div className="form-footer-info">
              <span className="lock-text">
                <Lock size={12} /> Non-disclosure guaranteed
              </span>
              <span className="invite-text">
                Instant SMS + Encrypted Calendar Invite
              </span>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: LOCATION & DETAILS */}
        <div className="info-column">
          {/* Top Location Map Card */}
          <div className="info-card location-card">
            <div className="map-overlay">
              <div className="map-badge geo-badge">
                <span className="green-dot"></span>
                <span>GEO-NODE: NYC-HUDSON</span>
              </div>
              <div className="map-badge airspace-badge">
                <span>ACTIVE AIRSPACE</span>
              </div>
              <div className="map-pin-box">
                <div className="pin-title">
                  <MapPin size={12} className="neon-icon" />
                  <span>PULSE360 FLAGSHIP</span>
                </div>
                <div className="pin-coords">40.7540° N, 74.0015° W</div>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="directions-btn"
              >
                <span>DIRECTIONS</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="address-details">
              <div className="address-block">
                <MapPin size={18} className="neon-icon flex-shrink" />
                <div>
                  <h4 className="address-heading">FLAGSHIP ADDRESS</h4>
                  <p className="address-text">
                    <strong>450 Hudson Boulevard, Suite 1200</strong> <br />
                    Manhattan, New York, NY 10001 (Private Lift Direct)
                  </p>
                </div>
              </div>

              <div className="contacts-row">
                <div className="contact-item">
                  <PhoneCall size={16} className="neon-icon" />
                  <div>
                    <span className="contact-label">DIRECT CONCIERGE</span>
                    <span className="contact-value">+1 (212) 555-0380</span>
                  </div>
                </div>

                <div className="contact-item">
                  <Mail size={16} className="neon-icon" />
                  <div>
                    <span className="contact-label">ENCRYPTED EMAIL</span>
                    <span className="contact-value">concierge@pulse360.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Access Specifications Card */}
          <div className="info-card specs-card">
            <div className="specs-header">
              <span>ACCESS SPECIFICATIONS</span>
              <span>REAL-TIME TELEMETRY</span>
            </div>

            <div className="specs-list">
              <div className="spec-row">
                <span className="spec-name">
                  <span className="green-dot"></span> Elite Founding Members
                </span>
                <span className="spec-val neon-text">24/7 BIOMETRIC RFID</span>
              </div>

              <div className="spec-row">
                <span className="spec-name">Staffed Coaching & Bio-Lab</span>
                <span className="spec-val">Mon - Fri: 05:00 - 22:00</span>
              </div>

              <div className="spec-row">
                <span className="spec-name">Weekend Recovery Chambers</span>
                <span className="spec-val">Sat - Sun: 06:00 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Bottom Inclusions Card */}
          <div className="info-card inclusions-card">
            <h4 className="inclusions-title">TOUR HOSPITALITY INCLUSIONS</h4>
            <div className="inclusions-grid">
              <div className="inclusion-item">
                <Car size={16} className="neon-icon" />
                <span>Private Valet Parking</span>
              </div>
              <div className="inclusion-item">
                <Wind size={16} className="neon-icon" />
                <span>Dyson Locker Suites</span>
              </div>
              <div className="inclusion-item">
                <Flame size={16} className="neon-icon" />
                <span>Infrared & Cold Plunge</span>
              </div>
              <div className="inclusion-item">
                <CupSoda size={16} className="neon-icon" />
                <span>Organic Performance Bar</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const faqData = [
  {
    id: 1,
    question: "CAN I BRING A GUEST OR ATHLETIC PARTNER TO MY PRIVATE TOUR?",
    answer:
      "Yes. You may bring one guest or athletic partner to your private tour. Please mention their details in the special requirements field so we can prepare their guest credential."
  },
  {
    id: 2,
    question: "WHAT IS REQUIRED FOR THE COMPLIMENTARY BIOMETRIC ONBOARDING SCAN?",
    answer:
      "We recommend wearing comfortable athletic attire. Avoid heavy meals 2 hours prior and ensure adequate hydration for accurate telemetry metrics."
  },
  {
    id: 3,
    question: "IS MEMBERSHIP STRICTLY CAPPED, OR CAN I JOIN IMMEDIATELY AFTER MY TOUR?",
    answer:
      "Membership is strictly capped to maintain tier-1 access quality. Upon completing your private tour, immediate admission is subject to current queue availability."
  },
  {
    id: 4,
    question: "WHERE IS VALET PARKING STATIONED UPON ARRIVAL?",
    answer:
      "Valet service is stationed directly at the main entrance of 450 Hudson Boulevard. Present your booking confirmation code to the valet attendant upon arrival."
  }
];

export const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* Header Block */}
        <div className="faq-header">
          <div className="faq-title-group">
            <span className="faq-badge">PROTOCOL GUIDANCE</span>
            <h2 className="faq-main-title">
              FREQUENTLY ADDRESSED ADMISSIONS INQUIRIES
            </h2>
          </div>
          <span className="faq-sub-text">VERIFIED POLICIES (REV 2024.3)</span>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <ChevronDown className={`faq-icon ${isOpen ? "rotate" : ""}`} size={18} />
                </button>
                
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default function ContactUs() {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactFormSection />
      <FaqSection />
    </div>
  );
}