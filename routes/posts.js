const express = require('express');
const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/post_controller');

// posts student data to the db
router.get('/student', passport.checkAuthentication, postController.studentData);
router.post('/create', postController.create);

module.exports = router;