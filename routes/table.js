const express = require('express');
const router = express.Router();

const tableController = require('../controllers/table_controller');

router.get('/',tableController.table);


module.exports = router;