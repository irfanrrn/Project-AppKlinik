var express = require('express');
var router = express.Router();
var doctor = require('../controller/doctorController')

router.get('/', doctor.getAllDoctor);

router.get('/:id', doctor.getDoctorId);

router.post('/', doctor.createDoctor);

router.put('/:id', doctor.updateDoctor);

router.delete('/:id', doctor.deleteDoctor);

module.exports = router;