const express = require('express');
const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/post_controller');

// renders the student form
router.get('/student', passport.checkAuthentication, postController.studentForm);
// posts student data to the db
router.post('/create-student', passport.checkAuthentication, postController.createStudent);
// renders the company form
router.get('/company', passport.checkAuthentication, postController.companyForm)
// posts student data to the db
router.post('/create-company', passport.checkAuthentication, postController.createCompany);
// renders the company list
router.get('/company-list', passport.checkAuthentication, postController.companyList)

module.exports = router;