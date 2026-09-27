import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { restaurantInfo } from '../data/restaurantData';

export const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Table Reservation Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Contact Banner */}
      <section
        style={{
          background: "linear-gradient(rgba(18,18,18,0.75), rgba(18,18,18,0.85)), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 0 4rem',
          color: '#FFF',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span className="section-tag" style={{ backgroundColor: 'rgba(216, 90, 39, 0.3)', color: '#FF9D73' }}>
            We'd Love to Hear From You
          </span>
          <h1 className="section-title" style={{ color: '#FFF', fontSize: '3.2rem' }}>
            Contact & Reservations
          </h1>
          <p className="section-subtitle" style={{ color: '#D4D4D8' }}>
            Have questions about table reservations, private event catering, or online ordering? Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'flex-start' }}>
            {/* Contact Form Card */}
            <div style={{ backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                Send Us a Message
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Fill in your details below and our restaurant host will get back to you within 2 hours.
              </p>

              {submitted ? (
                <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #6EE7B7', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
                  <CheckCircle2 size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#065F46', marginBottom: '0.5rem' }}>
                    Message Sent Successfully!
                  </h4>
                  <p style={{ color: '#047857', fontSize: '0.9rem' }}>
                    Thank you for reaching out to {restaurantInfo.name}. Our concierge team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="form-input"
                    >
                      <option>Table Reservation Inquiry</option>
                      <option>Private Event / Catering</option>
                      <option>Delivery Feedback</option>
                      <option>General Question</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Tell us about your date, party size, dietary preferences, or questions..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="form-input"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <Send size={18} />
                    <span>Send Message Now</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Info Sidebar */}
            <div>
              <div style={{ backgroundColor: '#121212', color: '#FFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem', color: '#FFF' }}>
                  Direct Contact Info
                </h3>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <MapPin size={22} color="var(--primary-accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1rem', color: '#FFF' }}>Location Address</strong>
                    <span style={{ color: '#A1A1AA', fontSize: '0.9rem' }}>{restaurantInfo.address}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <Phone size={22} color="var(--primary-accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1rem', color: '#FFF' }}>Phone Line</strong>
                    <a href={`tel:${restaurantInfo.phone}`} style={{ color: 'var(--primary-accent)', fontSize: '0.9rem', fontWeight: '600' }}>
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <Mail size={22} color="var(--primary-accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1rem', color: '#FFF' }}>Email Support</strong>
                    <span style={{ color: '#A1A1AA', fontSize: '0.9rem' }}>{restaurantInfo.email}</span>
                  </div>
                </div>

                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-accent)', marginBottom: '0.75rem' }}>
                  Follow Us Online
                </h4>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href="#" className="social-icon-btn" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="social-icon-btn" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="social-icon-btn" aria-label="Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                </div>
              </div>

              {/* Hours Box */}
              <div style={{ backgroundColor: '#FAF7F2', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
                  <Clock size={20} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-heading)' }}>Operating Hours</h4>
                </div>
                {restaurantInfo.hours.map((h, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <span>{h.days}</span>
                    <strong style={{ color: 'var(--text-heading)' }}>{h.time}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Styled Interactive Placeholder */}
      <section style={{ height: '380px', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <iframe
          title="Restaurant Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};
