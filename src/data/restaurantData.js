export const restaurantInfo = {
  name: 'Aura Fine Dining & Grill',
  shortName: 'Aura',
  tagline: 'Savor the Art of Extraordinary Culinary Excellence',
  description: 'Experience an unparalleled journey of flavor where modern gastronomy meets timeless Mediterranean craftsmanship. Every dish is artfully prepared using farm-fresh organic ingredients.',
  phone: '+1 (555) 234-5678',
  email: 'reservations@aurafinedining.com',
  address: '742 Gourmet Way, Downtown Plaza, NY 10001',
  googleMapsUrl: 'https://maps.google.com',
  hours: [
    { days: 'Monday - Thursday', time: '11:30 AM - 10:30 PM' },
    { days: 'Friday - Saturday', time: '11:00 AM - 11:30 PM' },
    { days: 'Sunday', time: '10:30 AM - 10:00 PM' }
  ],
  socials: [
    { name: 'Instagram', url: '#', icon: 'Instagram' },
    { name: 'Facebook', url: '#', icon: 'Facebook' },
    { name: 'Twitter', url: '#', icon: 'Twitter' }
  ]
};

export const specialOffers = [
  {
    id: 'offer-1',
    code: 'AURA20',
    title: 'Weekend Gourmet Feast',
    discount: '20% OFF',
    description: 'Enjoy 20% off on all Main Courses & Fine Drinks every Friday through Sunday.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tag: 'Limited Weekend Offer'
  },
  {
    id: 'offer-2',
    code: 'FREEDESSERT',
    title: 'Chef Special Compliments',
    discount: 'FREE DESSERT',
    description: 'Get a complimentary Molten Lava Cake or Venetian Tiramisu on orders over $60.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular Perk'
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: 'Farm-to-Table Freshness',
    description: 'We source 100% of our organic produce, herbs, and premium cuts daily from certified local sustainable farms.',
    icon: 'Leaf'
  },
  {
    id: 2,
    title: 'Master Culinary Artists',
    description: 'Led by Michelin-starred Executive Chef Antonio Rossi with over 18 years of international fine dining mastery.',
    icon: 'Award'
  },
  {
    id: 3,
    title: 'Ambiance & Craftsmanship',
    description: 'Immerse yourself in a luxurious yet warm atmosphere designed for intimate dinners and celebrations.',
    icon: 'Sparkles'
  },
  {
    id: 4,
    title: 'Swift Temperature-Controlled Delivery',
    description: 'Enjoy restaurant-quality hot & fresh meals delivered right to your doorstep in eco-friendly packaging.',
    icon: 'Truck'
  }
];

export const reviews = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Food Critic, City Epicure',
    rating: 5,
    comment: 'The Truffle & Wild Mushroom Arancini along with the Dry-Aged Ribeye blew me away. Aura sets a new gold standard for fine dining in NY.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    role: 'Regular Guest',
    rating: 5,
    comment: 'Impeccable service, astonishing presentation, and the online ordering process was effortless. The Chilean Sea Bass arrived piping hot!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Sophia Reynolds',
    role: 'Lifestyle Blogger',
    rating: 5,
    comment: 'The handcrafted lobster ravioli and wood-fired margherita pizza are unforgettable. Aura is my top recommendation for date nights.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    date: '2 weeks ago'
  }
];

export const teamChefs = [
  {
    name: 'Antonio Rossi',
    role: 'Executive Head Chef',
    bio: 'Former head chef at 3-Michelin star trattorias in Milan, passionate about blending classic recipes with modern gastronomy.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Elena Rostova',
    role: 'Master Pastry Chef',
    bio: 'Classically trained in Paris, Chef Elena creates decadent dessert masterpieces using single-origin dark chocolate and seasonal berries.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'David Chen',
    role: 'Sous Chef & Grill Master',
    bio: 'Specializing in dry-aged steak preparations and wood-fire smoking techniques with over a decade of high-end steakhouse experience.',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=600&q=80'
  }
];

export const historyTimeline = [
  { year: '2016', title: 'The First Spark', desc: 'Aura opened its doors as a boutique 10-table bistro in Downtown.' },
  { year: '2019', title: 'Michelin Recognition', desc: 'Received Michelin Bib Gourmand honors for exceptional quality and value.' },
  { year: '2022', title: 'Flagship Expansion', desc: 'Expanded into our modern 150-seat flagship restaurant featuring a wood-fire oven grill.' },
  { year: '2026', title: 'Digital Ordering & Delivery', desc: 'Launched our premium online portal to bring luxury dining straight to your home.' }
];
