// routes/cartRoutes.js
const express = require('express');
const router = express.Router();

// GET /cart/:userId - Fetch cart items for a specific user
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  res.send(`Fetching cart for user with ID: ${userId}`);
});

// POST /cart/:userId - Add a product to the user's cart
router.post('/:userId', (req, res) => {
  const { userId } = req.params;
  res.send(`Adding product to cart for user with ID: ${userId}`);
});

module.exports = router;