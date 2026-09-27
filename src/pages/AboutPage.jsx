import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Award, Heart, Leaf, Shield, ArrowRight, Utensils } from 'lucide-react';
import { SectionTitle } from '../components/common/SectionTitle';
import { restaurantInfo, teamChefs, historyTimeline } from '../data/restaurantData';

export const AboutPage = () => {
  return (
    <main>
      {/* About Banner */}
      <section
        style={{
          background: "linear-gradient(rgba(18,18,18,0.8), rgba(18,18,18,0.9)), url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 0 4rem',
          color: '#FFF',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span className="section-tag" style={{ backgroundColor: 'rgba(216, 90, 39, 0.3)', color: '#FF9D73' }}>
            <Sparkles size={14} />
            Heritage & Craft
          </span>
          <h1 className="section-title" style={{ color: '#FFF', fontSize: '3.2rem' }}>
            The Story of {restaurantInfo.name}
          </h1>
          <p className="section-subtitle" style={{ color: '#D4D4D8' }}>
            Dedicated to culinary passion, organic sustainability, and creating unforgettable dining memories since 2016.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <SectionTitle
                tag="Our Origins"
                title="A Passion for Authentic Mediterranean Flavor"
                subtitle="Founded in the heart of Downtown by Chef Antonio Rossi, Aura began with a simple belief: remarkable food starts with remarkable ingredients."
                center={false}
              />

              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Over the past decade, we have expanded our kitchen into a haven for food lovers seeking harmony between traditional wood-fired grilling and modern gastronomic precision.
              </p>

              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                Every single cut of prime dry-aged beef, every herb plucked from our greenhouse, and every handmade ravioli is prepared with genuine love and respect for culinary craft.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-accent)' }}>100%</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Organic Farm-to-Table</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-accent)' }}>50,000+</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Delighted Guests Served</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
                alt="Grill Dish"
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                alt="Restaurant Dining Area"
                style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginTop: '2rem' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Master Chefs Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <SectionTitle
            tag="Culinary Artists"
            title="Meet Our Master Culinary Team"
            subtitle="The visionary chefs who pour their heart and expertise into every plate."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {teamChefs.map((chef, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ height: '320px', overflow: 'hidden' }}>
                  <img
                    src={chef.image}
                    alt={chef.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary-accent)', textTransform: 'uppercase' }}>
                    {chef.role}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-heading)', margin: '0.3rem 0 0.6rem' }}>
                    {chef.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {chef.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <SectionTitle
            tag="Our Milestone Roadmap"
            title="A Journey Through Time"
            subtitle="Key milestones that shaped Aura into a premier fine dining destination."
          />

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {historyTimeline.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '2rem',
                  marginBottom: '2.5rem',
                  alignItems: 'flex-start'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--primary-accent)',
                    color: '#FFF',
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '700',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    flexShrink: 0
                  }}
                >
                  {item.year}
                </div>

                <div style={{ backgroundColor: '#FAF7F2', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', flexGrow: 1 }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/menu" className="btn btn-primary btn-lg">
              <Utensils size={20} />
              <span>Taste Our Creations Today</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
