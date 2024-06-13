var connection = require('../library/database');

const getAllDoctorSchedule = function (req, res) {
    connection.query('SELECT * FROM tbl_doctors_schedules', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                doctor_schedule_data: ''
            });
        } else {
            res.json( {
                doctor_schedule_data: rows
            });
        }
    });
}

const getDoctorScheduleId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_doctors_schedules WHERE schedule_id = '+ id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                doctor_schedule_data: ''
            });
        } else {
            res.json( {
                doctor_schedule_data: rows
            });
        }
    });
}

const createDoctorSchedule = function (req, res) {
    let doctor_id = req.body.doctor_id;
    let from_day = req.body.from_day;
    let until_day = req.body.until_day;
    let start_time = req.body.start_time;
    let end_time = req.body.end_time;
    let room_number = req.body.room_number;
    let errors = [];

    if (!doctor_id) {
        errors.push('The doctor_id field has not been filled in, please fill it in completely.');
    }

    if (!from_day) {
        errors.push('The from_day field has not been filled in, please fill it in completely.');
    }

    if (!until_day) {
        errors.push('The until_day field has not been filled in, please fill it in completely.');
    }

    if (!start_time) {
        errors.push('The start_time field has not been filled in, please fill it in completely.');
    }

    if (!end_time) {
        errors.push('The end_time field has not been filled in, please fill it in completely.');
    }

    if (!room_number) {
        errors.push('The room_number field has not been filled in, please fill it in completely.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
    }

    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, results) {
        if (err) {
            return res.status(500).json({ message: 'An error occurred on the server while checking the doctor_id' });
        }

        if (results.length === 0) {
            return res.status(400).json({ message: 'The doctor with the ID was not found' });
        }

        let formData = {
            doctor_id: doctor_id,
            from_day: from_day,
            until_day: until_day,
            start_time: start_time,
            end_time: end_time,
            room_number: room_number
        }
        
        connection.query('INSERT INTO tbl_doctors_schedules SET ?', formData, function(err, result) {
            if (err) {
                res.json({message: 'Data failed to save'});
            } else {
                res.send('Data saved successfully!');
            }
        });
    });
}

const updateDoctorSchedule = function(req, res) {
    let id = req.params.id;
    let doctor_id = req.body.doctor_id;
    let from_day = req.body.from_day;
    let until_day = req.body.until_day;
    let start_time = req.body.start_time;
    let end_time = req.body.end_time;
    let room_number = req.body.room_number;
    let errors = [];

    if (!doctor_id) {
        errors.push('The doctor_id field cannot be empty!');
    }

    if (!from_day) {
        errors.push('The from_day field cannot be empty!');
    }

    if (!until_day) {
        errors.push('The until_day field cannot be empty!');
    }

    if (!start_time) {
        errors.push('The start_time field cannot be empty!');
    }

    if (!end_time) {
        errors.push('The end_time field cannot be empty!');
    }

    if (!room_number) {
        errors.push('The room_number field cannot be empty!');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
    }

    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, results) {
        if (err) {
            return res.status(500).json({ message: 'An error occurred on the server while checking the doctor_id' });
        }

        if (results.length === 0) {
            return res.status(400).json({ message: 'The doctor with the ID was not found' });
        }

        let formData = {
            doctor_id: doctor_id,
            from_day: from_day,
            until_day: until_day,
            start_time: start_time,
            end_time: end_time,
            room_number: room_number
        };

        connection.query('UPDATE tbl_doctors_schedules SET ? WHERE schedule_id = ?', [formData, id], function(err, result) {
            if (err) {
                res.send('error', err);
                res.json({
                    id: req.params.id,
                    doctor_id: formData.doctor_id,
                    from_day: formData.from_day,
                    until_day: formData.until_day,
                    start_time: formData.start_time,
                    end_time: formData.end_time,
                    room_number: formData.room_number
            }) 
        } else {
                res.send('Data updated successfully!');
            }
        });
    });
}

const deleteDoctorSchedule = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_doctors_schedules WHERE schedule_id = ?', [id], function(err, result) {
        if (err) {
            res.status(500).send({ message: 'There is an error', error: err });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ message: 'ID does not exist' });
            } else {
                res.send('Data deleted successfully!');
            }
        }
    });
};


module.exports = {
    getAllDoctorSchedule,
    getDoctorScheduleId,
    createDoctorSchedule,
    updateDoctorSchedule,
    deleteDoctorSchedule
}