import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Sparkles, UtensilsCrossed } from 'lucide-react';
import { CategoryFilter } from '../components/menu/CategoryFilter';
import { FoodCard } from '../components/menu/FoodCard';
import { SectionTitle } from '../components/common/SectionTitle';
import { categories, menuItems } from '../data/menuData';

export const MenuPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (id) => {
    setActiveCategory(id);
    if (id === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', id);
    }
    setSearchParams(searchParams);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      {/* Menu Header Banner */}
      <section className="menu-page-header">
        <div className="container">
          <span className="section-tag" style={{ backgroundColor: 'rgba(216, 90, 39, 0.3)', color: '#FF9D73' }}>
            <Sparkles size={14} />
            Handcrafted Gastronomy
          </span>
          <h1 className="section-title" style={{ color: '#FFFFFF', fontSize: '3.2rem' }}>
            Our Gourmet Menu
          </h1>
          <p className="section-subtitle" style={{ color: '#D4D4D8' }}>
            Discover our curated culinary offerings crafted with fresh organic produce, imported aged cheeses, and prime cuts.
          </p>

          {/* Search Input */}
          <div className="menu-search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search dishes, ingredients, steaks, pasta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
            />
          </div>
        </div>
      </section>

      <div className="container">
        {/* Category Filters */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <span>Showing <strong>{filteredItems.length}</strong> delicious items</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ color: 'var(--primary-accent)', fontWeight: '600' }}
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Food Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <div className="food-grid">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <UtensilsCrossed size={48} color="var(--primary-accent)" style={{ marginBottom: '1rem', opacity: 0.6 }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>No dishes found</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We couldn't find any dish matching "{searchQuery}". Try searching for something else or switch category.
            </p>
            <button className="btn btn-primary" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
