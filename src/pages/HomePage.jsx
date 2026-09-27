import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { PopularDishes } from '../components/home/PopularDishes';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SpecialOffers } from '../components/home/SpecialOffers';
import { Reviews } from '../components/home/Reviews';
import { SectionTitle } from '../components/common/SectionTitle';
import { restaurantInfo } from '../data/restaurantData';

export const HomePage = () => {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Popular Dishes */}
      <PopularDishes />

      {/* 3. About Teaser Section */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Restaurant Dining Interior"
                style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '-1.5rem',
                  backgroundColor: 'var(--primary-accent)',
                  color: '#FFF',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  maxWidth: '220px'
                }}
              >
                <span style={{ fontSize: '2rem', fontWeight: '700', fontFamily: 'var(--font-heading)', display: 'block', lineHeight: 1 }}>10+ Years</span>
                <span style={{ fontSize: '0.85rem' }}>Of Culinary Excellence & Organic Quality</span>
              </div>
            </div>

            <div>
              <SectionTitle
                tag="Our Legacy"
                title="Crafting Unforgettable Culinary Experiences"
                subtitle="Since 2016, Aura Fine Dining has been dedicated to merging traditional Mediterranean warmth with cutting-edge culinary art."
                center={false}
              />

              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Every plate served at Aura tells a story of passion, balance, and uncompromising freshness. From our signature charcoal-grilled steaks to hand-rolled pasta, we invite you to embark on a journey of taste.
              </p>

              <Link to="/about" className="btn btn-primary">
                <span>Discover Our Story & Chefs</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Special Offers */}
      <SpecialOffers />

      {/* 6. Reviews */}
      <Reviews />

      {/* 7. Hours & Location Bar */}
      <section style={{ padding: '4rem 0', backgroundColor: '#FAF7F2', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
                <Clock size={24} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-heading)' }}>Opening Hours</h4>
              </div>
              {restaurantInfo.hours.map((h, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  <span>{h.days}</span>
                  <strong style={{ color: 'var(--text-heading)' }}>{h.time}</strong>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
                <MapPin size={24} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-heading)' }}>Visit Our Dining Room</h4>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                {restaurantInfo.address}
              </p>
              <Link to="/contact" className="btn btn-outline btn-sm">
                Get Directions
              </Link>
            </div>

            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary-accent)' }}>
                <Phone size={24} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-heading)' }}>Table Reservations</h4>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                For VIP table reservations or private dining events, call us directly:
              </p>
              <a href={`tel:${restaurantInfo.phone}`} style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--primary-accent)' }}>
                {restaurantInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
