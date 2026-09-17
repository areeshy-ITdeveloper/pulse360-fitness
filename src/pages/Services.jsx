import React, { useState } from "react"; // Fix 1: useState import kar diya gaya hai
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ArrowRight, Clock, CheckCircle2, FileText, X, ShieldCheck, Flame, Gauge, MapPin, User, AlertCircle, Mail, Phone, Calendar } from "lucide-react";
import dexaScanImg from "../assets/dexa-scan.jpg";
import "./Services.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};
// 1. HERO SECTION COMPONENT
export const ServicesHero = () => {
  return (
    <section className="services-hero-section">
      <div className="services-hero-container">
        
        {/* Top Badges / Tags */}
        <div className="services-hero-top-bar">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="pill-badge green-dot-badge"
          >
            <span className="badge-dot"></span>
            PRECISION TRAINING REGIMENS
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="telemetry-badge"
          >
            <span className="badge-dot green-dot"></span>
            <span className="telemetry-title">TELEMETRY:</span> 
            <span className="telemetry-status">OPTIMIZED</span>
            <span className="telemetry-separator">•</span>
            <span className="telemetry-protocol">CALIBRATION PROTOCOL V4.8</span>
          </motion.div>
        </div>

        {/* Main Title Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="services-hero-title"
        >
          SERVICES &<br />
          <span className="accent-glow-text">PERFORMANCE</span><br />
          PROGRAMS
        </motion.h1>

        {/* Bottom Content Grid: Description & Heart Rate Sync Widget */}
        <div className="services-hero-bottom-grid">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="services-hero-desc"
          >
            Meticulously calibrated protocols designed for measurable, compounding 
            physiological transformation. Built for elite power output, neural adaptation, 
            and cellular recovery.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="heart-rate-card"
          >
            <div className="heart-icon-box">
              <Activity size={20} className="pulse-heart-icon" />
            </div>
            <div className="heart-rate-details">
              <span className="heart-rate-label">LIVE HEART RATE SYNC</span>
              <div className="heart-rate-value-group">
                <span className="heart-rate-num">164</span>
                <span className="heart-rate-unit">BPM AVG</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// 2. CARDS SECTION COMPONENT
export const ServiceCards = () => {
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);

  const programsData = [
    {
      id: "hiit",
      featured: true,
      categoryTag: "HIGH INTENSITY / METABOLIC BURN",
      statusTag: "ZONE 5 ACTIVE",
      code: "CURRICULUM // HIIT-01",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800",
      title: "METABOLIC HIIT & HYBRID CARDIO",
      output: "850-1,100 kcal",
      duration: "45 Mins",
      intensity: "9.5 / 10",
      description: "Sled pushes, assault bikes, kettlebell complexes, and biometric heart rate monitoring in real time to expand VO2 max under anaerobic threshold.",
      hardware: ["Technogym Skillmill", "Concept2 Rowers", "Rogue Echo Bikes"],
      btnText: "VIEW HIIT CURRICULUM",
      curriculumDetails: {
        targetGoal: "Maximize Anaerobic Capacity & Fast-Fat Oxidation",
        phases: [
          "Phase 1: Dynamic Warm-Up & Heart Rate Ramp (10 Mins)",
          "Phase 2: High-Velocity Assault Bike Intervals (15 Mins)",
          "Phase 3: Sled Push & Heavy Kettlebell Circuit (15 Mins)",
          "Phase 4: Parasympathetic Cool-Down & Recovery (5 Mins)"
        ],
        biometrics: "Monitored via MyZone / Garmin Live Telemetry"
      }
    },
    {
      id: "strength",
      featured: false,
      categoryTag: "BARBELL & POWER SUITE",
      statusTag: "VBT SENSOR SYNCED",
      code: "CURRICULUM // STR-02",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800",
      title: "HYPERTROPHY & OLYMPIC STRENGTH",
      output: "500-750 kcal",
      duration: "60 Mins",
      intensity: "9.0 / 10",
      description: "Barbell mechanics, velocity-based training (GymAware sensors), periodized overload, and power rack stations engineered for maximum recruitment.",
      hardware: ["Eleiko Olympic Plates", "Calibrated Barbells", "Belt Squat Rigs"],
      btnText: "VIEW STRENGTH CURRICULUM",
      curriculumDetails: {
        targetGoal: "Maximum Muscle Hypertrophy & Kinetic Power Output",
        phases: [
          "Phase 1: Joint Activation & Barbell Primer (10 Mins)",
          "Phase 2: Velocity-Based Heavy Compound Lifts (25 Mins)",
          "Phase 3: Hypertrophy Isolation & Power Rack Work (20 Mins)",
          "Phase 4: Decompression & Myofascial Release (5 Mins)"
        ],
        biometrics: "Barbell Velocity Measured with GymAware Sensors"
      }
    },
    {
      id: "mobility",
      featured: false,
      categoryTag: "STRUCTURAL RESTORATION",
      statusTag: "PARASYMPATHETIC FOCUS",
      code: "CURRICULUM // MOB-03",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800",
      title: "KINETIC MOBILITY & JOINT LONGEVITY",
      output: "Active Recovery",
      duration: "50 Mins",
      intensity: "6.5 / 10",
      description: "Controlled Articular Rotations (CARs), myofascial decompression, loaded stretching, and posture realignments to guarantee long-term joint health.",
      hardware: ["Woodway Mobility Arcs", "Hyperice Percussion", "Stall Bars"],
      btnText: "VIEW MOBILITY CURRICULUM",
      curriculumDetails: {
        targetGoal: "Joint Articular Freedom & Neuromuscular Recovery",
        phases: [
          "Phase 1: Full-Body Controlled Articular Rotations (10 Mins)",
          "Phase 2: End-Range Loaded Stretching & Mobility Arcs (20 Mins)",
          "Phase 3: Postural Realignment & Core Activation (15 Mins)",
          "Phase 4: Hyperice Targeted Percussion Therapy (5 Mins)"
        ],
        biometrics: "Focus on Heart Rate Variability (HRV) Elevation"
      }
    }
  ];

  return (
    <>
      <section className="program-cards-section">
        <div className="program-cards-container">
          <div className="program-cards-grid">
            {programsData.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`program-card ${card.featured ? "featured-card" : ""}`}
              >
                {/* Card Header Media */}
                <div className="card-media-wrapper">
                  <img src={card.image} alt={card.title} className="card-image" />
                  <span className={`tag-category ${card.featured ? "accent-bg" : ""}`}>
                    {card.categoryTag}
                  </span>
                  <span className="tag-status">{card.statusTag}</span>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>

                  {/* Metrics Stats Grid */}
                  <div className="card-metrics-grid">
                    <div className="metric-item">
                      <span className="metric-label">OUTPUT</span>
                      <span className={`metric-val ${card.featured ? "highlight" : ""}`}>
                        {card.output}
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">DURATION</span>
                      <span className="metric-val">{card.duration}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">INTENSITY</span>
                      <span className={`metric-val ${card.featured ? "highlight" : ""}`}>
                        {card.intensity}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="card-desc">{card.description}</p>

                  {/* Hardware Tags */}
                  <div className="card-hardware-box">
                    <span className="hardware-label">HARDWARE PROTOCOL:</span>
                    <div className="hardware-pills">
                      {card.hardware.map((item, hIdx) => (
                        <span key={hIdx} className="hardware-pill">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Button with Modal Trigger */}
                <div className="card-footer">
                  <button 
                    className={`card-btn ${card.featured ? "btn-accent" : "btn-dark"}`}
                    onClick={() => setSelectedCurriculum(card)}
                  >
                    <span>{card.btnText}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Modal Popup */}
      <AnimatePresence>
        {selectedCurriculum && (
          <div className="tour-modal-overlay" onClick={() => setSelectedCurriculum(null)}>
            <motion.div 
              className="tour-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Topbar */}
              <div className="tour-modal-topbar">
                <span className="sys-code">{selectedCurriculum.code}</span>
                <button className="tour-modal-close" onClick={() => setSelectedCurriculum(null)}>
                  <X size={18} />
                </button>
              </div>

              <div className="tour-pill-badge">
                <span>{selectedCurriculum.categoryTag}</span>
              </div>

              <h2 className="tour-modal-title">
                {selectedCurriculum.title}
              </h2>
              <p className="tour-modal-subtitle">
                {selectedCurriculum.curriculumDetails.targetGoal}
              </p>

              {/* Quick Metrics Bar inside Modal */}
              <div className="vip-pass-card">
                <div className="vip-pass-header">
                  <div className="vip-price-title" style={{ fontSize: "1.1rem" }}>
                    <span className="price-accent">{selectedCurriculum.duration}</span> SESSION
                  </div>
                  <div className="vip-badge-group">
                    <span className="guaranteed-badge">{selectedCurriculum.statusTag}</span>
                  </div>
                </div>

                {/* Curriculum Phase Breakdown */}
                <div className="vip-features-list" style={{ marginTop: "15px" }}>
                  {selectedCurriculum.curriculumDetails.phases.map((phase, pIdx) => (
                    <div className="vip-feature-item" key={pIdx}>
                      <div className="check-icon-box"><CheckCircle2 size={12} /></div>
                      <span>{phase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware & Biometrics Note */}
              <div style={{ marginTop: "15px", padding: "12px", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: "0.75rem", color: "#888", display: "block", marginBottom: "4px" }}>
                  TELEMETRY & HARDWARE INTEGRATION:
                </span>
                <p style={{ fontSize: "0.85rem", color: "#ddd", margin: 0 }}>
                  {selectedCurriculum.curriculumDetails.biometrics}
                </p>
              </div>

              <button 
                className="tour-submit-btn" 
                style={{ marginTop: "20px" }}
                onClick={() => setSelectedCurriculum(null)}
              >
                <span>CLOSE CURRICULUM OVERVIEW</span>
                <ArrowRight size={20} />
              </button>

              <div className="tour-modal-footer" style={{ marginTop: "15px" }}>
                <span><ShieldCheck size={12} /> Verified Biomechanical Protocol</span>
                <span>Real-Time Sensor Sync</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

// 3. SCHEDULE GRID COMPONENT
export const ScheduleGrid = () => {
  const [activeFilter, setActiveFilter] = useState('ALL PROGRAMS');
  const [activeDay, setActiveDay] = useState('MON');
  
  // Interactive Modal & Step States
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookingType, setBookingType] = useState('RESERVATION'); // 'RESERVATION' | 'WAITLIST'
  const [bookingStep, setBookingStep] = useState(1); // 1: Overview, 2: Form Input, 3: Success
  
  // User Details Input State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const filters = ['ALL PROGRAMS', 'HIIT', 'STRENGTH', 'MOBILITY', 'RECOVERY & LAB'];
  const days = [
    { label: 'MON', isToday: true },
    { label: 'TUE', isToday: false },
    { label: 'WED', isToday: false },
    { label: 'THU', isToday: false },
    { label: 'FRI', isToday: false },
    { label: 'SAT', isToday: false },
    { label: 'SUN', isToday: false }
  ];

  const [scheduleData, setScheduleData] = useState([
    {
      id: 1,
      time: '06:00 AM',
      title: 'PULSE BURN 360',
      subtitle: 'Metabolic High Conditioning',
      category: 'HIIT',
      coach: 'Julian Thorne',
      coachRole: 'Ex-Decathlete',
      zone: 'Arena Studio A',
      booked: 18,
      total: 20,
      isFull: false
    },
    {
      id: 2,
      time: '07:30 AM',
      title: 'OLYMPIC FOUNDATION',
      subtitle: 'Clean, Snatch & Overload',
      category: 'STRENGTH',
      coach: 'Marcus Vance',
      coachRole: 'USAW Sr. Coach',
      zone: 'The Iron Vault',
      booked: 12,
      total: 12,
      isFull: true
    },
    {
      id: 3,
      time: '09:00 AM',
      title: 'KINETIC FLOW & RESTORE',
      subtitle: 'Spinal Articulation & Decompression',
      category: 'MOBILITY',
      coach: 'Elena Rostova',
      coachRole: 'DPT Biomechanics',
      zone: 'Zen Sanctuary',
      booked: 8,
      total: 16,
      isFull: false
    },
    {
      id: 4,
      time: '12:00 PM',
      title: 'EXPRESS METABOLIC BLAST',
      subtitle: 'Midday High-Yield Conditioning',
      category: 'HIIT',
      coach: 'Julian Thorne',
      coachRole: 'Ex-Decathlete',
      zone: 'Arena Studio A',
      booked: 14,
      total: 20,
      isFull: false
    },
    {
      id: 5,
      time: '05:30 PM',
      title: 'HEAVY PULL & POWER',
      subtitle: 'Posterior Chain & Deadlift Cluster',
      category: 'STRENGTH',
      coach: 'Marcus Vance',
      coachRole: 'USAW Sr. Coach',
      zone: 'The Iron Vault',
      booked: 10,
      total: 12,
      isFull: false
    },
    {
      id: 6,
      time: '07:00 PM',
      title: 'MYOFASCIAL RELEASE & CRYO',
      subtitle: 'Hyper-Cryotherapy & Compression',
      category: 'MOBILITY & RECOVERY',
      coach: 'Dr. Elena Rostova',
      coachRole: 'DPT Biomechanics',
      zone: 'BioLab & Lounge',
      booked: 6,
      total: 10,
      isFull: false
    }
  ]);

  const filteredData = scheduleData.filter((item) => {
    if (activeFilter === 'ALL PROGRAMS') return true;
    if (activeFilter === 'RECOVERY & LAB') return item.category.includes('RECOVERY');
    return item.category === activeFilter;
  });

  const openModal = (item, type) => {
    setSelectedBooking(item);
    setBookingType(type);
    setBookingStep(1);
    setFormData({ name: '', email: '', phone: '' });
  };

  const closeModal = () => {
    setSelectedBooking(null);
    setBookingStep(1);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    if (bookingType === 'RESERVATION') {
      setScheduleData((prevData) =>
        prevData.map((item) => {
          if (item.id === selectedBooking.id) {
            const newBooked = item.booked + 1;
            return {
              ...item,
              booked: newBooked,
              isFull: newBooked >= item.total
            };
          }
          return item;
        })
      );
    }

    setBookingStep(3);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <>
      <section className="schedule-section">
        <div className="schedule-container">
          
          {/* Section Header */}
          <div className="schedule-header">
            <div>
              <span className="schedule-subtag">LIVE OPERATIONAL TIMETABLE</span>
              <h2 className="schedule-title">CLASS SCHEDULE & GRID</h2>
            </div>
            <div className="realtime-status">
              <span className="status-dot"></span>
              <span>Real-time Seat Reservations Synchronized</span>
            </div>
          </div>

          {/* Filter Bar & Day Selector */}
          <div className="controls-bar">
            <div className="program-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="day-selector">
              {days.map((day) => (
                <button
                  key={day.label}
                  className={`day-btn ${activeDay === day.label ? 'active' : ''}`}
                  onClick={() => setActiveDay(day.label)}
                >
                  <span>{day.label}</span>
                  {day.isToday && <span className="today-badge">TODAY</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Table Grid */}
          <div className="schedule-table-wrapper">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>TIME SLOT</th>
                  <th>CLASS PROTOCOL</th>
                  <th>DISCIPLINE</th>
                  <th>MASTER COACH</th>
                  <th>STUDIO / ZONE</th>
                  <th>CAPACITY STATUS</th>
                  <th className="text-right">RESERVATION</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => {
                  const percentage = (row.booked / row.total) * 100;
                  const remainingSpots = row.total - row.booked;
                  const isFull = row.booked >= row.total;

                  return (
                    <tr key={row.id}>
                      <td className="time-cell">
                        <Clock size={16} className="clock-icon" />
                        <span>{row.time}</span>
                      </td>

                      <td className="protocol-cell">
                        <div className="protocol-title">{row.title}</div>
                        <div className="protocol-sub">{row.subtitle}</div>
                      </td>

                      <td>
                        <span className="discipline-tag">
                          <span className="tag-dot"></span>
                          {row.category}
                        </span>
                      </td>

                      <td className="coach-cell">
                        <div className="coach-name">{row.coach}</div>
                        <div className="coach-role">{row.coachRole}</div>
                      </td>

                      <td className="zone-cell">{row.zone}</td>

                      <td className="capacity-cell">
                        <div className="capacity-header">
                          <div className="progress-bar-bg">
                            <div 
                              className={`progress-bar-fill ${isFull ? 'full' : ''}`} 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className={`capacity-num ${isFull ? 'full-text' : ''}`}>
                            {row.booked}/{row.total}
                          </span>
                        </div>
                        <span className={`capacity-sub ${isFull ? 'waitlist' : ''}`}>
                          {isFull ? 'WAITLIST ACTIVE' : `${remainingSpots} SPOTS REMAIN`}
                        </span>
                      </td>

                      <td className="action-cell">
                        {isFull ? (
                          <button 
                            className="btn-waitlist"
                            onClick={() => openModal(row, 'WAITLIST')}
                          >
                            JOIN WAITLIST
                          </button>
                        ) : (
                          <button 
                            className="btn-book"
                            onClick={() => openModal(row, 'RESERVATION')}
                          >
                            BOOK SPOT
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Reservation & Waitlist Modal Overlay */}
      <AnimatePresence>
        {selectedBooking && (
          <div className="tour-modal-overlay" onClick={closeModal}>
            <motion.div 
              className="tour-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Topbar */}
              <div className="tour-modal-topbar">
                <span className="sys-code">
                  {bookingType === 'RESERVATION' ? 'CONFIRM RESERVATION' : 'WAITLIST REGISTRATION'}
                </span>
                <button className="tour-modal-close" onClick={closeModal}>
                  <X size={18} />
                </button>
              </div>

              {/* Step 1: Summary Overview */}
              {bookingStep === 1 && (
                <>
                  <div className="tour-pill-badge">
                    <span>{selectedBooking.category} • {activeDay}</span>
                  </div>

                  <h2 className="tour-modal-title">{selectedBooking.title}</h2>
                  <p className="tour-modal-subtitle">{selectedBooking.subtitle}</p>

                  <div className="vip-pass-card" style={{ marginTop: '16px' }}>
                    <div className="vip-features-list">
                      <div className="vip-feature-item">
                        <div className="check-icon-box"><Clock size={12} /></div>
                        <span><strong>Time Slot:</strong> {selectedBooking.time}</span>
                      </div>
                      <div className="vip-feature-item">
                        <div className="check-icon-box"><User size={12} /></div>
                        <span><strong>Master Coach:</strong> {selectedBooking.coach} ({selectedBooking.coachRole})</span>
                      </div>
                      <div className="vip-feature-item">
                        <div className="check-icon-box"><MapPin size={12} /></div>
                        <span><strong>Studio Zone:</strong> {selectedBooking.zone}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    className="tour-submit-btn" 
                    style={{ 
                      marginTop: "20px", 
                      backgroundColor: bookingType === 'WAITLIST' ? '#ff3b30' : undefined 
                    }}
                    onClick={() => setBookingStep(2)}
                  >
                    <span>
                      {bookingType === 'RESERVATION' ? 'CONFIRM SEAT RESERVATION' : 'PROCEED TO WAITLIST'}
                    </span>
                    <ArrowRight size={20} />
                  </button>
                </>
              )}

              {/* Step 2: Member Details Form */}
              {bookingStep === 2 && (
                <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '4px' }}>
                    {bookingType === 'RESERVATION' ? 'MEMBER DETAILS' : 'WAITLIST ENTRY'}
                  </h3>
                  <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '16px' }}>
                    Provide your contact details to lock your spot telemetry.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ position: 'relative' }}>
                      <User size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Full Name" 
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 36px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '0.85rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <Mail size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 36px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '0.85rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <Phone size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Phone Number" 
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '10px 12px 10px 36px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '0.85rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="tour-submit-btn" 
                    style={{ 
                      marginTop: "20px",
                      backgroundColor: bookingType === 'WAITLIST' ? '#ff3b30' : undefined 
                    }}
                  >
                    <span>
                      {bookingType === 'RESERVATION' ? 'COMPLETE BOOKING' : 'SUBMIT TO WAITLIST'}
                    </span>
                    <ArrowRight size={20} />
                  </button>
                </form>
              )}

              {/* Step 3: Success Confirmation */}
              {bookingStep === 3 && (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  {bookingType === 'RESERVATION' ? (
                    <CheckCircle2 size={48} style={{ color: 'var(--neon-green)', margin: '0 auto 12px auto' }} />
                  ) : (
                    <AlertCircle size={48} style={{ color: '#ff3b30', margin: '0 auto 12px auto' }} />
                  )}
                  
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '6px' }}>
                    {bookingType === 'RESERVATION' ? 'RESERVATION CONFIRMED!' : 'WAITLIST ADDED!'}
                  </h3>
                  <p style={{ color: '#aaa', fontSize: '0.85rem' }}>
                    {bookingType === 'RESERVATION' 
                      ? `Spot reserved for ${formData.name}. Confirmation email sent!` 
                      : `You are on the priority waitlist for ${selectedBooking.title}.`}
                  </p>
                </div>
              )}

              <div className="tour-modal-footer" style={{ marginTop: "15px" }}>
                <span><ShieldCheck size={12} /> Live Telemetry Synchronized</span>
                <span>Encrypted Data Sync</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
export const DexaDiagnosticSection = () => {
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    timeWindow: "Midday (11:00 - 14:00)"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        timeWindow: "Midday (11:00 - 14:00)"
      });
    }, 2000);
  };

  // Sample PDF Download Handler
  const handleDownloadPDF = () => {
    const dummyText = "PULSE360 - SAMPLE DEXA DIAGNOSTIC REPORT\nResult: 99.4% Precision Baseline Mapping Verified.";
    const blob = new Blob([dummyText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = "/PULSE360_DEXA_Sample_Report.pdf";
    link.download = "PULSE360_DEXA_Sample_Report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="dexa-section-wrapper">
        <motion.div 
          className="dexa-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {/* Left Side: Media Card */}
          <div className="dexa-image-card">
            {/* Fix 2: dexa-scan -> dexaScanImg (imported variable, was being
                read as "dexa minus scan" and crashing the whole app) */}
            <img src={dexaScanImg} alt="DEXA Scan Machine" className="dexa-img" />
            
            {/* Overlay Tag inside Image */}
            <div className="dexa-overlay-badge">
              <div className="badge-text-group">
                <span className="badge-subtitle">TELEMETRY PRECISION</span>
                <h4 className="badge-title">99.4% Dual-Energy Accuracy</h4>
              </div>
              <CheckCircle2 size={22} className="badge-check-icon" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="dexa-content">
            {/* Badges Bar */}
            <div className="dexa-badge-row">
              <span className="pill-badge-green">BASELINE PHYSIOLOGICAL MAPPING</span>
              <span className="protocol-code">PROTOCOL #00-DEXA</span>
            </div>

            {/* Heading */}
            <h2 className="dexa-title">
              MEDICAL-GRADE DEXA SCAN <br />
              & BIOMETRIC DIAGNOSTIC
            </h2>

            {/* Description */}
            <p className="dexa-description">
              Stop guessing your physiological adaptations. Every member is entitled to clinical DEXA body composition scanning, visceral fat scoring, resting metabolic rate profiling, and continuous VO2 maximum lactate mapping.
            </p>

            {/* 3 Metric Feature Boxes Grid */}
            <div className="dexa-features-grid">
              <div className="dexa-feature-box">
                <h3 className="feature-title">DEXA Lean Mass</h3>
                <p className="feature-desc">Sub-millimeter muscle symmetry tracking per limb.</p>
              </div>

              <div className="dexa-feature-box">
                <h3 className="feature-title">Visceral Adipose</h3>
                <p className="feature-desc">Cardiovascular & internal organ health telemetry.</p>
              </div>

              <div className="dexa-feature-box">
                <h3 className="feature-title">Bone Mineral Score</h3>
                <p className="feature-desc">Osteo-density validation for heavy kinetic loading.</p>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="dexa-cta-row">
              <button 
                className="btn-neon-green"
                onClick={() => setIsModalOpen(true)}
              >
                <Activity size={18} />
                <span>SCHEDULE HEALTH DIAGNOSTIC</span>
              </button>

              <button 
                className="btn-dark-outline"
                onClick={handleDownloadPDF}
              >
                <FileText size={18} />
                <span>DOWNLOAD SAMPLE DIAGNOSTIC REPORT (PDF)</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Reservation Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="tour-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div 
              className="tour-modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Topbar */}
              <div className="tour-modal-topbar">
                <span className="sys-code">SYS://SECURE-INTAKE_v4.2</span>
                <button className="tour-modal-close" onClick={() => setIsModalOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              {!isSubmitted ? (
                <>
                  <div className="tour-pill-badge">
                    <span>SCHEDULE ON-SITE DIAGNOSTIC</span>
                  </div>

                  <h2 className="tour-modal-title">
                    RESERVE YOUR PRIVATE FACILITY TOUR
                  </h2>
                  <p className="tour-modal-subtitle">
                    Experience our high-tech telemetry lab, receive a complimentary DEXA body scan, and consult with our Performance Director.
                  </p>

                  {/* VIP Pass Pricing Card */}
                  <div className="vip-pass-card">
                    <div className="vip-pass-header">
                      <div className="vip-price-title">
                        <span className="price-accent">$29</span> VIP ENTRY PASS
                      </div>
                      <div className="vip-badge-group">
                        <span className="guaranteed-badge">GUARANTEED ALL-ACCESS</span>
                        <span className="credited-note">(Fully credited upon membership enrollment)</span>
                      </div>
                    </div>

                    <div className="vip-features-list">
                      <div className="vip-feature-item">
                        <div className="check-icon-box"><CheckCircle2 size={12} /></div>
                        <span>Complimentary DEXA Biometric Scan <strong>($450 Value Included)</strong></span>
                      </div>
                      <div className="vip-feature-item">
                        <div className="check-icon-box"><CheckCircle2 size={12} /></div>
                        <span>1-on-1 Health & Plan Strategy Session with Performance Director</span>
                      </div>
                      <div className="vip-feature-item">
                        <div className="check-icon-box"><CheckCircle2 size={12} /></div>
                        <span>Full Day Access to Hydrotherapy & Recovery Suite</span>
                      </div>
                    </div>
                  </div>

                  {/* Intake Form */}
                  <form onSubmit={handleSubmit} className="tour-form">
                    <div className="form-group">
                      <div className="label-row">
                        <label>FULL NAME</label>
                        <span className="required-tag">REQUIRED</span>
                      </div>
                      <div className="input-icon-wrapper">
                        <input 
                          type="text" 
                          name="fullName"
                          placeholder="e.g. Marcus Vance"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                        <User size={16} className="input-icon" />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label>EMAIL ADDRESS</label>
                        <div className="input-icon-wrapper">
                          <input 
                            type="email" 
                            name="email"
                            placeholder="marcus.vance@performance.io"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <Mail size={16} className="input-icon" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>PHONE NUMBER (MOBILE)</label>
                        <div className="input-icon-wrapper">
                          <input 
                            type="tel" 
                            name="phone"
                            placeholder="+1 (212) 849-3600"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                          <Phone size={16} className="input-icon" />
                        </div>
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label>PREFERRED DATE</label>
                        <div className="input-icon-wrapper">
                          <input 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                          />
                          <Calendar size={16} className="input-icon" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>TIME WINDOW</label>
                        <div className="input-icon-wrapper">
                          <select 
                            name="timeWindow"
                            value={formData.timeWindow}
                            onChange={handleInputChange}
                          >
                            <option value="Morning (08:00 - 11:00)">Morning (08:00 - 11:00)</option>
                            <option value="Midday (11:00 - 14:00)">Midday (11:00 - 14:00)</option>
                            <option value="Evening (16:00 - 19:00)">Evening (16:00 - 19:00)</option>
                          </select>
                          <Clock size={16} className="input-icon" />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="tour-submit-btn">
                      <span>CONFIRM VIP TOUR PASS ($29)</span>
                      <ArrowRight size={20} />
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 10px" }}>
                  <CheckCircle2 size={56} style={{ color: "#a8ff00", margin: "0 auto 16px auto" }} />
                  <h3 style={{ color: "#fff", fontSize: "1.4rem", marginBottom: "8px" }}>
                    DIAGNOSTIC TOUR CONFIRMED
                  </h3>
                  <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
                    Your telemetry session slot has been reserved. Check your email for access instructions.
                  </p>
                </div>
              )}

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

// 4. MAIN PAGE EXPORT
export default function Services() {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServiceCards />
      <ScheduleGrid />
      <DexaDiagnosticSection />
    </div>
  );
}