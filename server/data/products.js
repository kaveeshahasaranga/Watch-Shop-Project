const products = [
  {
    name: 'Casio Edifice EFR-539D',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop', // තාවකාලික photo එකක්
    description:
      'A sporty chronograph watch with a stainless steel band and water resistance up to 100m. Perfect for casual and formal wear.',
    brand: 'Casio',
    category: 'Men',
    price: 28500,
    countInStock: 10,
    specs: {
      movement: 'Quartz',
      strapMaterial: 'Stainless Steel',
      waterResistance: '100m',
      glassType: 'Mineral Glass',
    },
  },
  {
    name: 'Poedagar Luxury 921',
    image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop',
    description:
      'Luxury business watch with leather strap. Features a calendar and luminous hands.',
    brand: 'Poedagar',
    category: 'Men',
    price: 6500,
    countInStock: 7,
    specs: {
      movement: 'Quartz',
      strapMaterial: 'Leather',
      waterResistance: '30m',
      glassType: 'Hardlex',
    },
  },
  {
    name: 'Skmei Women Rose Gold',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1000&auto=format&fit=crop',
    description:
      'Elegant rose gold watch for women. Slim profile and minimalist design.',
    brand: 'Skmei',
    category: 'Women',
    price: 4500,
    countInStock: 0, // Stock ඉවරයි කියලා පෙන්නන්න
    specs: {
      movement: 'Quartz',
      strapMaterial: 'Alloy',
      waterResistance: '30m',
      glassType: 'Glass',
    },
  },
];

module.exports = products;