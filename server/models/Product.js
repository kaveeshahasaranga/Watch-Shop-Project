const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true, // e.g., Casio, Poedagar
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['Men', 'Women', 'Unisex'], // කාණ්ඩ සීමා කරනවා
    required: true,
  },
  image: {
    type: String, // Image URL එක මෙතනට එන්නේ
    required: true,
  },
  // Watch Specific Specs
  specs: {
    movement: { type: String }, // Quartz/Automatic
    strapMaterial: { type: String }, // Leather/Steel
    waterResistance: { type: String }, // 3ATM
    glassType: { type: String }, // Hardlex/Sapphire
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  }
}, {
  timestamps: true, // CreatedAt, UpdatedAt ඉබේම හැදෙනවා
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;