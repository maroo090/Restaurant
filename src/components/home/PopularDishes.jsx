import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { FoodCard } from '../menu/FoodCard';
import { menuItems } from '../../data/menuData';

export const PopularDishes = () => {
  const popularItems = menuItems.filter((item) => item.isPopular).slice(0, 6);

  return (
    <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <SectionTitle
          tag="Culinary Masterpieces"
          title="Our Most Popular Dishes"
          subtitle="Explore the signature dishes loved by our guests, handcrafted daily with passion and precision."
        />

        <div className="food-grid">
          {popularItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/menu" className="btn btn-outline btn-lg">
            <span>Explore Entire Menu</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
