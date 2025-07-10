// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// --- Import Routers ---
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// --- Mount Routers ---
// For any request to /users, use the userRoutes module
app.use('/users', userRoutes);

// For any request to /products, use the productRoutes module
app.use('/products', productRoutes);

// For any request to /cart, use the cartRoutes module
app.use('/cart', cartRoutes);

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`E-commerce API is running on http://localhost:${PORT}`);
});