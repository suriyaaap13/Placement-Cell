const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/logout', userController.logout);

module.exports = router;