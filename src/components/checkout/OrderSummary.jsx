import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import '../../styles/cart.css';

export const OrderSummary = ({ showCheckoutBtn = true }) => {
  const { cart, subtotal, deliveryFee, tax, totalPrice, totalItems } = useCart();

  return (
    <div className="order-summary-card">
      <h3 className="summary-title">Order Summary</h3>

      {/* Mini Item List Preview if needed */}
      {!showCheckoutBtn && (
        <div style={{ marginBottom: '1.25rem', maxHeight: '200px', overflowY: 'auto' }}>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              <span>{item.quantity}x {item.name}</span>
              <span style={{ fontWeight: '600', color: 'var(--text-heading)' }}>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}

      <div className="summary-row">
        <span>Subtotal ({totalItems} items)</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Delivery Fee</span>
        {deliveryFee === 0 ? (
          <span className="free-delivery-badge">FREE</span>
        ) : (
          <span>${deliveryFee.toFixed(2)}</span>
        )}
      </div>

      <div className="summary-row">
        <span>Estimated Taxes (8%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      {subtotal > 0 && subtotal < 50 && (
        <div style={{ fontSize: '0.8rem', color: 'var(--primary-accent)', backgroundColor: 'var(--primary-light)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', textAlign: 'center' }}>
          Add ${(50 - subtotal).toFixed(2)} more for <strong>FREE Delivery!</strong>
        </div>
      )}

      <div className="summary-row total">
        <span>Total Amount</span>
        <span style={{ color: 'var(--primary-accent)' }}>${totalPrice.toFixed(2)}</span>
      </div>

      {showCheckoutBtn && (
        <Link
          to="/checkout"
          className="btn btn-primary btn-lg"
          style={{ width: '100%', marginTop: '0.5rem' }}
        >
          <span>Proceed to Checkout</span>
          <ArrowRight size={18} />
        </Link>
      )}

      <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        <ShieldCheck size={16} color="var(--primary-accent)" />
        <span>100% Encrypted & Secure Order Guarantee</span>
      </div>
    </div>
  );
};
