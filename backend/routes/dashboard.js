var express = require('express');
var router = express.Router();
var dashboard = require('../controller/dashboardController')

router.get('/', dashboard.getDashboard);

module.exports = router;