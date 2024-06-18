var express = require('express');
var router = express.Router();
var dashborad = require('../controller/dashboardController')

router.get('/', dashborad.getDashboard);

module.exports = router;