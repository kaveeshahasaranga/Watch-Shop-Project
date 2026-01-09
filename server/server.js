const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // Database connect කරනවා

const app = express();

app.use(cors());
app.use(express.json()); // JSON දත්ත කියවන්න පුළුවන් කරනවා

// Test Route එකක්
app.get('/', (req, res) => {
  res.send('API is running... ⌚');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🔥`);
});