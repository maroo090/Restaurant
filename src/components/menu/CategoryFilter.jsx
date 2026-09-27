import React from 'react';
import { Utensils, Salad, Beef, Sandwich, Pizza, CookingPot, Cake, Wine } from 'lucide-react';
import '../../styles/menu.css';

const iconMap = {
  Utensils,
  Salad,
  Beef,
  Sandwich,
  Pizza,
  CookingPot,
  Cake,
  Wine
};

export const CategoryFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="category-filter-wrapper">
      <div className="category-filter-list">
        {categories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Utensils;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              className={`category-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <IconComponent size={18} />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
