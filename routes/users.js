const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/signin', userController.signIn);
router.get('/signup', userController.signUp);
router.get('/signout', userController.signOut);

router.post('/create-session', userController.createSession);
router.post('/create', userController.create);

module.exports = router;