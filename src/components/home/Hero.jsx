import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Utensils, ArrowRight, ShieldCheck, Clock, Award, Star } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantData';
import '../../styles/hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="animate-fade-in">
            <div className="hero-tag">
              <Sparkles size={16} />
              <span>Premium Gastronomy & Grill</span>
            </div>

            <h1 className="hero-title">
              Taste the Fine Art of <span>{restaurantInfo.name}</span>
            </h1>

            <p className="hero-subtitle">
              {restaurantInfo.tagline}. Hand-crafted recipes, wild-caught seafood, dry-aged steaks, and organic ingredients seared to absolute perfection.
            </p>

            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary btn-lg">
                <Utensils size={20} />
                <span>View Full Menu</span>
              </Link>

              <Link to="/about" className="btn btn-outline btn-lg" style={{ color: '#FFF', borderColor: 'rgba(255,255,255,0.3)' }}>
                <span>Our Story</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="hero-features">
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Award size={20} />
                </div>
                <div className="hero-feature-text">
                  <strong>Michelin Rated</strong>
                  <span>Award-winning kitchen</span>
                </div>
              </div>

              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <Clock size={20} />
                </div>
                <div className="hero-feature-text">
                  <strong>30 Min Delivery</strong>
                  <span>Piping hot & fresh</span>
                </div>
              </div>

              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <div className="hero-feature-text">
                  <strong>100% Organic</strong>
                  <span>Farm-fresh produce</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Featured Dish Preview */}
          <div className="hero-card-preview animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="hero-badge-floating">
              <Star size={14} fill="#FFF" />
              <span>#1 Chef Special</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80"
              alt="Ribeye Steak"
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}
            />

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#FFF', marginBottom: '0.4rem' }}>
              Prime Dry-Aged Ribeye
            </h3>
            <p style={{ color: '#A1A1AA', fontSize: '0.85rem', marginBottom: '1rem' }}>
              14oz USDA Prime ribeye seared with rosemary garlic butter and truffle mash.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-accent)' }}>$48.00</span>
              <Link to="/menu?cat=mains" className="btn btn-primary btn-sm">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
