// Dependencies
const { Router } = require('express');

// Router Instance
const router = Router();

// Controllers
const healthcheckController = require('../controllers/controller-healthcheck');

// CRUD Routes
router.get('/', healthcheckController.healthcheck);

module.exports = router;
