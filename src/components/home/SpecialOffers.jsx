import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { specialOffers } from '../../data/restaurantData';

export const SpecialOffers = () => {
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#F3EFEA' }}>
      <div className="container">
        <SectionTitle
          tag="Exclusive Promotions"
          title="Special Offers & Rewards"
          subtitle="Take advantage of our curated dining deals and complimentary rewards on online orders."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ position: 'relative', height: '180px' }}>
                <img src={offer.image} alt={offer.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--primary-accent)', color: '#FFF', padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: '700', fontSize: '0.9rem' }}>
                  {offer.discount}
                </div>
              </div>

              <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--gold-accent)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {offer.tag}
                </span>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                  {offer.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  {offer.description}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px dashed var(--border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--primary-light)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--primary-accent)' }}>
                    <Tag size={14} color="var(--primary-accent)" />
                    <span style={{ fontFamily: 'monospace', fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary-accent)' }}>
                      USE: {offer.code}
                    </span>
                  </div>

                  <Link to="/menu" className="btn btn-primary btn-sm">
                    <span>Claim Deal</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
