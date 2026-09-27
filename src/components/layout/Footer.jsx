import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantData';
import '../../styles/footer.css';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Utensils size={22} />
              </div>
              <span>{restaurantInfo.name}</span>
            </Link>
            <p className="footer-desc">
              {restaurantInfo.description}
            </p>
            <div className="footer-socials">
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

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/menu" className="footer-link">Our Menu</Link></li>
              <li><Link to="/about" className="footer-link">About Aura Story</Link></li>
              <li><Link to="/contact" className="footer-link">Reservations & Contact</Link></li>
              <li><Link to="/cart" className="footer-link">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* Menu Highlights */}
          <div>
            <h4 className="footer-title">Popular Categories</h4>
            <ul className="footer-list">
              <li><Link to="/menu?cat=mains" className="footer-link">Prime Ribeye & Steaks</Link></li>
              <li><Link to="/menu?cat=appetizers" className="footer-link">Truffle Starters</Link></li>
              <li><Link to="/menu?cat=pasta" className="footer-link">Handcrafted Pasta</Link></li>
              <li><Link to="/menu?cat=pizza" className="footer-link">Wood-Fired Pizza</Link></li>
              <li><Link to="/menu?cat=desserts" className="footer-link">Artisanal Desserts</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="footer-title">Get in Touch</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>{restaurantInfo.address}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>{restaurantInfo.phone}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>{restaurantInfo.email}</span>
            </div>

            <h5 style={{ color: '#FFF', marginTop: '1.25rem', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
              Subscribe for Exclusive Perks
            </h5>
            {subscribed ? (
              <p style={{ color: 'var(--primary-accent)', fontSize: '0.85rem' }}>
                ✓ Thank you for subscribing! Check your inbox soon.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                  <span>Subscribe</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {restaurantInfo.name}. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
