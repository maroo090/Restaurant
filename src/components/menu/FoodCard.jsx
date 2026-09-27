import React from 'react';
import { Star, Clock, Flame, Plus, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import '../../styles/menu.css';

export const FoodCard = ({ item }) => {
  const { addToCart, openFoodDetail } = useCart();

  return (
    <div className="food-card">
      <div className="food-card-img-wrapper" onClick={() => openFoodDetail(item)}>
        <img src={item.image} alt={item.name} className="food-card-img" loading="lazy" />

        <div className="food-card-badges">
          {item.isPopular && <span className="badge badge-primary">Popular</span>}
          {item.isChefSpecial && <span className="badge badge-gold">Chef's Choice</span>}
        </div>
      </div>

      <div className="food-card-body">
        <div className="food-card-header">
          <h3 className="food-card-title" onClick={() => openFoodDetail(item)}>
            {item.name}
          </h3>
          <div className="food-card-rating">
            <Star size={14} fill="#D97706" color="#D97706" />
            <span>{item.rating}</span>
          </div>
        </div>

        <p className="food-card-desc">{item.description}</p>

        <div className="food-card-meta">
          <div className="food-card-meta-item">
            <Clock size={14} />
            <span>{item.prepTime}</span>
          </div>
          <div className="food-card-meta-item">
            <Flame size={14} />
            <span>{item.calories}</span>
          </div>
        </div>

        <div className="food-card-footer">
          <span className="food-card-price">${item.price.toFixed(2)}</span>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => openFoodDetail(item)}
              title="Quick View Details"
            >
              <Eye size={16} />
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addToCart(item, 1)}
            >
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
