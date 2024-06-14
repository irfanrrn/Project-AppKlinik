var express = require('express');
var router = express.Router();
var doctor = require('../controller/doctorController');

var { 
    createPostValidation,
    updatePostValidation,
    result 
   } = require("../middleware/validation.js");
var { upload } = require("../middleware/uploadImage.js");

router.get('/', doctor.getAllDoctor);

router.get('/:id', doctor.getDoctorId);

router.post('/', upload.single('image'), createPostValidation, result, doctor.createDoctor);

router.put('/:id', upload.single('image'), updatePostValidation, result, doctor.updateDoctor);

router.delete('/:id', doctor.deleteDoctor);

module.exports = router;