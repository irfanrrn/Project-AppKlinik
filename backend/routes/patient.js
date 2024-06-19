var express = require('express');
var router = express.Router();
var patient = require('../controller/patientController')

router.get('/', patient.getAllPatient);

router.get('/:id', patient.getPatientId);

router.get('/by-user/:id', patient.getPatientUserId);

router.post('/', patient.createPatient);

router.put('/:id', patient.updatePatient);

router.delete('/:id', patient.deletePatient);

module.exports = router;