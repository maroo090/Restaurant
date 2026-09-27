import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowLeft, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItem } from '../components/cart/CartItem';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { SectionTitle } from '../components/common/SectionTitle';

export const CartPage = () => {
  const { cart, clearCart, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="container" style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}
          >
            <ShoppingBag size={40} />
          </div>

          <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Your Cart is Empty</h2>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            Looks like you haven't added any culinary treats yet. Explore our menu and indulge in fine dining at home!
          </p>

          <Link to="/menu" className="btn btn-primary btn-lg">
            <Utensils size={20} />
            <span>Explore Menu & Order</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <span className="section-tag">Shopping Cart</span>
            <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: 0 }}>
              Your Selected Items ({totalItems})
            </h1>
          </div>

          <button
            className="btn btn-outline btn-sm"
            onClick={clearCart}
            style={{ color: '#EF4444', borderColor: '#FCA5A5' }}
          >
            <Trash2 size={16} />
            <span>Clear Entire Cart</span>
          </button>
        </div>

        <div className="cart-layout">
          {/* Cart Item List */}
          <div className="cart-items-container">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <div style={{ paddingTop: '1.5rem', marginTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
              <Link to="/menu" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-accent)', fontWeight: '600' }}>
                <ArrowLeft size={18} />
                <span>Continue Browsing Menu</span>
              </Link>
            </div>
          </div>

          {/* Right Summary Sidebar */}
          <div>
            <OrderSummary showCheckoutBtn={true} />
          </div>
        </div>
      </div>
    </main>
  );
};
