var express = require('express');
var router = express.Router();
var administrator = require('../controller/administratorController')

router.get('/', administrator.getAllAdministrator);

router.get('/:id', administrator.getAdministratorId);

router.post('/', administrator.createAdministrator);

router.put('/:id', administrator.updateAdministrator);

router.delete('/:id', administrator.deleteAdministrator);

module.exports = router;