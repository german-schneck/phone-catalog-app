// Dependencies
const { Router } = require('express');

// Router Instance
const router = Router();

// Controllers
const phonesController = require('../controllers/controller-phones');

// CRUD Routes
router.get('/', phonesController.getPhones);

module.exports = router;
