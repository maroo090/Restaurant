import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import '../../styles/cart.css';

export const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-img" />

      <div>
        <h4 className="cart-item-title">{item.name}</h4>
        <span className="cart-item-price">${item.price.toFixed(2)} each</span>
      </div>

      <div className="qty-counter">
        <button
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          aria-label="Decrease quantity"
        >
          <Minus size={14} />
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          aria-label="Increase quantity"
        >
          <Plus size={14} />
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text-heading)' }}>
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button
          className="cart-item-remove-btn"
          onClick={() => removeFromCart(item.id)}
          title="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};
