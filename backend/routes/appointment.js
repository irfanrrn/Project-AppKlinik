var express = require('express');
var router = express.Router();
var appointment = require('../controller/appointmentController')

router.get('/', appointment.getAllAppointment);

router.get('/:id', appointment.getAppointmentId);

router.post('/', appointment.createAppointment);

router.put('/:id', appointment.updateAppointement);

router.delete('/:id', appointment.deleteAppointment);

module.exports = router;