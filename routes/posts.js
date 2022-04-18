const express = require('express');
const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/post_controller');

// renders the student form
router.get('/student', passport.checkAuthentication, postController.studentData);
// posts student data to the db
router.post('/create', postController.create);
// renders the company form
router.get('/company', passport.checkAuthentication, postController.companyData)

module.exports = router;