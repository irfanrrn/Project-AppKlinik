var connection = require('../library/database');

const getAllAppointment = function (req, res) {
    connection.query('SELECT * FROM tbl_appointments', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                message: "successfully",
                appointment_data: ''
            });
        } else {
            res.json({
                message: "successfully",
                appointment_data: rows
            });
        }
    });
}

const getAppointmentId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_appointments WHERE appointment_id = ' + id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                message: "successfully",
                appointment_data: ''
            });
        } else {
            res.json({
                message: "successfully",
                appointment_data: rows
            });
        }
    });
}

const createAppointment = async function (req, res) {
    let doctor_id = req.body.doctor_id;
    let patient_id = req.body.patient_id;
    let { user_id, name, gender, address, date_of_birth, phone_number } = req.body;
    let date = req.body.date;
    let queue_no;
    let status = "Will come";
    let errors = false;

    if (!doctor_id) {
        errors = true;
        res.json({ message: 'The doctor_id field has not been filled in, please fill it in completely.' });
    }

    if (!patient_id) {
        await new Promise(function (resolve, reject) {
            connection.query('INSERT INTO tbl_patients set ?', { user_id, name, gender, address, date_of_birth, phone_number },
                function (err, result) {
                    if (err) {
                        res.json(err);
                        reject('error')
                    }
                    patient_id = result.insertId;
                    resolve('succeed');
                })
        })
    }

    if (!date) {
        errors = true;
        res.json({ message: 'The date field has not been filled in, please fill it in completely.' });
    }

    if (!status) {
        errors = true;
        res.json({ message: 'The status field has not been filled in, please fill it in completely.' });
    }

    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, result) {
        if (err) {
            return res.status(500).json({ message: 'An error occurred on the server while checking doctor_id', err });
        }
        if (result.length === 0) {
            return res.status(400).json({ message: 'The doctor with this ID was not found' });
        }
    })

    connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [patient_id], function (err, result) {
        if (err) {
            return res.status(500).json({ message: 'An error occurred on the server while checking patient_id' });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'The patient with this ID was not found' });
        }
    })

    // Menentukan nomor antrian berikutnya untuk dokter tersebut pada tanggal tertentu
    connection.query('SELECT MAX(queue_no) AS max_queue_no FROM tbl_appointments WHERE doctor_id = ? AND date = ?', [doctor_id, date], function (err, result) {
        if (err) {
            return res.status(500).json({ message: 'An error occurred on the server when determining the queue number', err });
        }

        queue_no = (result[0].max_queue_no || 0) + 1;

        if (!errors) {
            let formData = {
                doctor_id,
                patient_id,
                date,
                queue_no,
                status
            };

            connection.query('INSERT INTO tbl_appointments SET ?', formData, function (err, result) {
                if (err) {
                    res.json(err);
                } else {
                    res.send({ message: 'Data saved successfully!'});
                }
            });
        }
    });
}

const updateAppointement = function (req, res) {
    let id = req.params.id;
    let doctor_id = req.body.doctor_id;
    let patient_id = req.body.patient_id;
    let date = req.body.date;
    let queue_no = req.body.queue_no;
    let status = req.body.status;
    let rating = req.body.rating;
    let review = req.body.review;
    let errors = false;

    if (!date) {
        errors = true;
        res.json({ message: 'The date field cannot be empty!' });
    }

    if (!queue_no) {
        errors = true;
        res.json({ message: 'The queue_no field cannot be empty!' });
    }

    if (!status) {
        errors = true;
        res.json({ message: 'The status field cannot be empty!' });
    }

    if (!rating) {
        errors = true;
        res.json({ message: 'The rating field cannot be empty!' });
    }

    if (!review) {
        errors = true;
        res.json({ message: 'The review field cannot be empty!' });
    }

    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, result) {
        if (err) {
            return res.status(500).json({ message: 'An error occurred on the server while checking doctor_id', err });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'The user with this ID was not found' });
        }
    })

    connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [patient_id], function (err, result) {
        if (err) {
            return res.status(500).json({ message: 'An error occurred on the server while checking patient_id' });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'The patient with this ID was not found' });
        }
    })

    if (!errors) {
        let formData = {
            doctor_id: doctor_id,
            patient_id: patient_id,
            date: date,
            queue_no: queue_no,
            status: status,
            rating: rating,
            review: review
        }

        connection.query('UPDATE tbl_appointments SET ? WHERE appointment_id = ' + id, formData, function (err, result) {

            if (err) {
                res.send('error', err);
                res.json({
                    id: req.params.id,
                    doctor_id: formData.doctor_id,
                    patient_id: formData.patient_id,
                    date: formData.date,
                    queue_no: formData.queue_no,
                    status: formData.status,
                    rating: formData.rating,
                    review: formData.review,
                })
            } else {
                res.send({ message: 'Data updated successfully!'});
            }
        })
    }
}

const deleteAppointment = function (req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_appointments WHERE appointment_id = ' + id, function (err, result) {
        if (err) {
            res.send('error', err)
        } else {
            if (result.affectedRows === 0) {
                res.send({message: 'ID does not exist'});
            } else {
                res.send({ message: 'Data deleted successfully!'});
            }
        }
    })
}

const updateAppointmentStatus = function(req, res){
    let id = req.params.id;
    let status = req.body.status;
    let errors = false;

    if (!status) {
        errors = true;
        res.json({ message: 'The status field cannot be empty!' });
    }

    connection.query('UPDATE tbl_appointments SET ? WHERE appointment_id = ' + id, {status}, function (err, result) {

        if (err) {
            res.send('error', err);
            res.json({
                id: req.params.id,
                status: status
            })
        } else {
            res.send({ message: 'Data updated successfully!'});
        }
    })
}

const updateAppointementFeedback = function(req, res) {
    let id = req.params.id;
    let rating = req.body.rating;
    let review = req.body.review;
    let errors = false;

    if (!rating) {
        errors = true;
        res.json({ message: 'The rating field cannot be empty!' });
    }

    if (!review) {
        errors = true;
        res.json({ message: 'The review field cannot be empty!' });
    }

    connection.query('UPDATE tbl_appointments SET ? WHERE appointment_id = ' + id, {rating, review}, function (err, result) {

        if (err) {
            res.send('error', err);
            res.json({
                id: req.params.id,
                rating: formData.rating,
                review: formData.review
            })
        } else {
            res.send({ message: 'Data updated successfully!'});
        }
    })
}

module.exports = {
    getAllAppointment,
    getAppointmentId,
    createAppointment,
    updateAppointement,
    deleteAppointment,
    updateAppointmentStatus,
    updateAppointementFeedback
}