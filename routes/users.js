const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/signin', userController.signIn);
router.get('/signup', userController.signUp);
router.get('/signout', userController.signOut);

router.post('/create-session', passport.authenticate(
    'local', 
    { failureRedirect: '/users/signin' }
), userController.createSession);
router.post('/create', userController.create);

module.exports = router;