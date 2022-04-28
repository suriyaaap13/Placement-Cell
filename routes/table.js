const express = require('express');
const passport = require('passport');
const router = express.Router();

const tableController = require('../controllers/table_controller');

router.get('/', passport.checkAuthentication, tableController.table);


module.exports = router;