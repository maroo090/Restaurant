import React from 'react';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast = () => {
  const { toast } = useCart();

  if (!toast.show) return null;

  return (
    <div className="toast-notification">
      {toast.image ? (
        <img src={toast.image} alt="Dish" className="toast-img" />
      ) : (
        <div style={{ color: 'var(--primary-accent)' }}>
          <CheckCircle2 size={24} />
        </div>
      )}
      <div className="toast-content">
        <p style={{ fontWeight: 600, color: '#FFF' }}>{toast.message}</p>
      </div>
    </div>
  );
};
