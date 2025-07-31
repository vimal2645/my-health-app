const express = require('express');
const router = express.Router();
const specs = require('../data/specializations.json');
router.get('/', (req, res) => res.json(specs));
module.exports = router;
