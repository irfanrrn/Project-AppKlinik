var express = require('express');
var router = express.Router();
var register = require('../controller/registerController')

router.post('/', register.createRegister);

module.exports = router;