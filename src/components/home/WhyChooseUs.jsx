import React from 'react';
import { Leaf, Award, Sparkles, Truck } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { whyChooseUs } from '../../data/restaurantData';

const iconMap = {
  Leaf,
  Award,
  Sparkles,
  Truck
};

export const WhyChooseUs = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <SectionTitle
          tag="Our Philosophy"
          title="Why Dine With Aura"
          subtitle="We believe in creating memorable dining moments through unmatched ingredients, culinary innovation, and warm hospitality."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {whyChooseUs.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;

            return (
              <div
                key={feature.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '2.25rem 1.75rem',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  transition: 'var(--transition)'
                }}
                className="feature-card-hover"
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem'
                  }}
                >
                  <IconComponent size={28} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.6rem' }}>
                  {feature.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
