import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, Banknote, ShieldCheck, CheckCircle2, ArrowRight, Utensils, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { restaurantInfo } from '../data/restaurantData';

export const CheckoutPage = () => {
  const { cart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'New York',
    notes: '',
    paymentMethod: 'cod', // 'cod' or 'card'
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  if (cart.length === 0 && !orderComplete) {
    return (
      <main className="checkout-page">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2 className="section-title">No Items to Checkout</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Please add dishes to your cart before proceeding to checkout.
          </p>
          <Link to="/menu" className="btn btn-primary">
            View Menu
          </Link>
        </div>
      </main>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API backend order processing delay
    setTimeout(() => {
      const simulatedOrder = {
        orderId: `AURA-${Math.floor(100000 + Math.random() * 900000)}`,
        customerName: formData.fullName,
        deliveryAddress: `${formData.address}, ${formData.city}`,
        total: totalPrice,
        paymentMethod: formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit Card (Paid)',
        estimatedTime: '25 - 35 Minutes'
      };

      setOrderComplete(simulatedOrder);
      setIsSubmitting(false);
      clearCart();
    }, 1500);
  };

  return (
    <main className="checkout-page">
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <span className="section-tag">Instant Checkout</span>
          <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: 0 }}>
            Delivery Details & Payment
          </h1>
        </div>

        <div className="checkout-grid">
          {/* Form Side */}
          <div className="checkout-form-card">
            <form onSubmit={handleSubmit}>
              {/* Section 1: Customer Contact */}
              <h3 className="form-section-title">
                <span>1. Contact & Delivery Address</span>
              </h3>

              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Sophia Reynolds"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="sophia@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label className="form-label">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="Apt 4B, 125 Fifth Avenue"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Delivery / Chef Notes (Optional)</label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="e.g. Ring doorbell twice, extra sauce on the side, allergies..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-input"
                ></textarea>
              </div>

              {/* Section 2: Payment Options */}
              <h3 className="form-section-title" style={{ marginTop: '2rem' }}>
                <span>2. Choose Payment Method</span>
              </h3>

              <div className="payment-method-selector">
                <div
                  className={`payment-option-card ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                >
                  <Banknote size={24} color={formData.paymentMethod === 'cod' ? 'var(--primary-accent)' : 'var(--text-muted)'} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem' }}>Cash on Delivery</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pay in cash upon arrival</span>
                  </div>
                </div>

                <div
                  className={`payment-option-card ${formData.paymentMethod === 'card' ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                >
                  <CreditCard size={24} color={formData.paymentMethod === 'card' ? 'var(--primary-accent)' : 'var(--text-muted)'} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem' }}>Card Payment</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Credit or Debit Card</span>
                  </div>
                </div>
              </div>

              {/* Card Form Inputs (if card selected) */}
              {formData.paymentMethod === 'card' && (
                <div style={{ backgroundColor: '#FAF7F2', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
                  <div className="form-group">
                    <label className="form-label">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="4532 •••• •••• 8892"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="form-input"
                      required={formData.paymentMethod === 'card'}
                    />
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label">Expiry Date</label>
                      <input
                        type="text"
                        name="cardExpiry"
                        placeholder="MM / YY"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        className="form-input"
                        required={formData.paymentMethod === 'card'}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">CVV / CVC</label>
                      <input
                        type="password"
                        name="cardCvv"
                        placeholder="123"
                        maxLength="4"
                        value={formData.cardCvv}
                        onChange={handleChange}
                        className="form-input"
                        required={formData.paymentMethod === 'card'}
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '1rem' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <span>Confirm & Place Order (${totalPrice.toFixed(2)})</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Order Summary Sidebar */}
          <div>
            <OrderSummary showCheckoutBtn={false} />
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {orderComplete && (
        <div className="modal-backdrop">
          <div className="confirmation-modal">
            <div className="success-icon-circle">
              <CheckCircle2 size={44} />
            </div>

            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
              ORDER CONFIRMED
            </span>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
              Thank You for Dining With Us!
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
              Your order <strong>{orderComplete.orderId}</strong> has been received by our kitchen staff. Our master chefs are preparing your meal now.
            </p>

            <div style={{ backgroundColor: '#FAF7F2', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'left', marginBottom: '2rem', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Recipient:</span>
                <strong>{orderComplete.customerName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Delivery Address:</span>
                <strong>{orderComplete.deliveryAddress}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Payment:</span>
                <strong>{orderComplete.paymentMethod}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-light)', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Estimated Delivery:</span>
                <strong style={{ color: 'var(--primary-accent)' }}>{orderComplete.estimatedTime}</strong>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
              onClick={() => navigate('/')}
            >
              <Utensils size={18} />
              <span>Back to Home Page</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
