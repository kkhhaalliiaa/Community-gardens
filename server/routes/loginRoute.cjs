const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.cjs');

router.post('/', loginController.handleLogin); // Ensure POST method is used

module.exports = router;
