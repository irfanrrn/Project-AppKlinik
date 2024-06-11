var express = require('express');
var router = express.Router();
var user = require('../controller/userController')

router.get('/', user.getAllUser);

router.get('/:id', user.getUserId);

router.post('/', user.createUser);

router.put('/:id', user.updateUser);

router.delete('/:id', user.deleteUser);

module.exports = router;