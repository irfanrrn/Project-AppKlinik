var express = require('express');
var router = express.Router();
var login = require('../controller/loginController')

router.post('/', login.createLogin);

module.exports = router;