var express = require('express');
var router = express.Router();
var schedule = require('../controller/doctor_scheduleController')

router.get('/', schedule.getAllDoctorSchedule);

router.get('/:id', schedule.getDoctorScheduleId);

router.post('/', schedule.createDoctorSchedule);

router.put('/:id', schedule.updateDoctorSchedule);

router.delete('/:id', schedule.deleteDoctorSchedule);

module.exports = router;