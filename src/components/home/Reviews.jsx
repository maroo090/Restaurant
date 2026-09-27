import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { reviews } from '../../data/restaurantData';

export const Reviews = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#121212', color: '#FFFFFF' }}>
      <div className="container">
        <SectionTitle
          tag="Guest Testimonials"
          title="What Food Critics & Guests Say"
          subtitle="Real reviews from food critics, bloggers, and beloved everyday patrons."
          light={true}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                backgroundColor: '#1C1C1E',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Quote size={32} color="var(--primary-accent)" style={{ opacity: 0.4, marginBottom: '1rem' }} />

              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p style={{ color: '#D4D4D8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem', flexGrow: 1, fontStyle: 'italic' }}>
                "{review.comment}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-full)', objectFit: 'cover' }}
                />
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: '#FFF' }}>{review.name}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary-accent)' }}>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
