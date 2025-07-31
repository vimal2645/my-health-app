const express = require('express');
const router = express.Router();
const cities = require('../data/cities.json');

// GET /api/cities
router.get('/', (req, res) => {
  res.json(cities);
});

module.exports = router;
