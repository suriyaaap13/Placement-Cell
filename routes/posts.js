const express = require('express');
const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/post_controller');


// posts student data to the db
router.post('/create-student', passport.checkAuthentication, postController.createStudent);
// renders the company form
router.get('/company', passport.checkAuthentication, postController.companyForm)
// posts student data to the db
router.post('/create-company', passport.checkAuthentication, postController.createCompany);
// renders the company list
router.get('/company-list', passport.checkAuthentication, postController.companyList);
// allows the user to add result to the company/Interview post
router.get('/add-result/:id',  passport.checkAuthentication, postController.addResult);
// stores the result in the database
router.post('/store-result/:id', passport.checkAuthentication, postController.storeResult);
// shows the selected students
router.get('/show-result/:id', passport.checkAuthentication, postController.showResult);

module.exports = router;