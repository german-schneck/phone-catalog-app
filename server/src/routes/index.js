// Dependencies
const { Router } = require('express');

// Router Instance
const router = Router();

// Nested routes
const system = require('./system');
const phones = require('./phones');

// Routes List
router.use('/', system);
router.use('/phones', phones);

module.exports = router;
