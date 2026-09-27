import React, { useState, useEffect } from 'react';
import { X, Star, Clock, Flame, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import '../../styles/menu.css';

export const FoodDetailModal = () => {
  const { selectedFoodDetail, closeFoodDetail, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [selectedFoodDetail]);

  if (!selectedFoodDetail) return null;

  const handleAdd = () => {
    addToCart(selectedFoodDetail, quantity);
    closeFoodDetail();
  };

  return (
    <div className="modal-backdrop" onClick={closeFoodDetail}>
      <div className="food-modal" onClick={(e) => e.stopPropagation()}>
        <button className="food-modal-close" onClick={closeFoodDetail} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ position: 'relative' }}>
          <img
            src={selectedFoodDetail.image}
            alt={selectedFoodDetail.name}
            className="food-modal-img"
          />
          <div className="food-card-badges" style={{ top: '1.25rem', left: '1.25rem' }}>
            {selectedFoodDetail.isPopular && <span className="badge badge-primary">Popular</span>}
            {selectedFoodDetail.isChefSpecial && <span className="badge badge-gold">Chef Special</span>}
          </div>
        </div>

        <div className="food-modal-content">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span className="badge badge-primary" style={{ textTransform: 'uppercase' }}>
              {selectedFoodDetail.category}
            </span>
            <div className="food-card-rating">
              <Star size={14} fill="#D97706" color="#D97706" />
              <span>{selectedFoodDetail.rating} (120+ reviews)</span>
            </div>
          </div>

          <h3 className="food-modal-title">{selectedFoodDetail.name}</h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
            {selectedFoodDetail.longDescription || selectedFoodDetail.description}
          </p>

          {/* Ingredients Section */}
          <div style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.6rem', color: 'var(--text-heading)' }}>
              Fresh Ingredients & Components:
            </h4>
            <div>
              {selectedFoodDetail.ingredients?.map((ing, idx) => (
                <span key={idx} className="ingredient-tag">
                  ✓ {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Meta Info */}
          <div className="food-card-meta" style={{ marginBottom: '1.5rem' }}>
            <div className="food-card-meta-item">
              <Clock size={16} />
              <span>Prep: {selectedFoodDetail.prepTime}</span>
            </div>
            <div className="food-card-meta-item">
              <Flame size={16} />
              <span>Cal: {selectedFoodDetail.calories}</span>
            </div>
          </div>

          {/* Action Row */}
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Total Price</span>
              <span className="food-card-price">${(selectedFoodDetail.price * quantity).toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="qty-counter">
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button className="btn btn-primary" onClick={handleAdd}>
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
