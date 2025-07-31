const express = require('express');
const router = express.Router();
const doctors = require('../data/doctors.json');

router.get('/', (req, res) => {
  const cityQuery = (req.query.city || '').toLowerCase();
  const specializationQuery = (req.query.specialization || '').toLowerCase();

  let results = doctors;

  if(cityQuery) {
    results = results.filter(doc => doc.city.toLowerCase() === cityQuery);
  }

  if(specializationQuery) {
    results = results.filter(doc => doc.specialization.toLowerCase() === specializationQuery);
  }

  res.json(results);
});

module.exports = router;
