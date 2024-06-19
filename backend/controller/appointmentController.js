var connection = require('../library/database');
require('dotenv').config();
var {setReminder, sendEmail} = require ('../library/sendEmail');

const getAllAppointment = function (req, res) {
    connection.query(`SELECT a.*, 
        d.name AS doctor_name,d.phone_number, 
        d.specialization, d.qualification, d.image,
        p.user_id, p.name AS patient_name, p.gender, p.address, 
        p.date_of_birth, p.phone_number, p.email 
        FROM tbl_appointments a JOIN tbl_doctors d ON a.doctor_id = d.doctor_id JOIN tbl_patients p ON a.patient_id = p.patient_id`, function (err, rows) {
        if (err) {
            res.status(500).json({
                message: "Error",
                error: err
            });
        } else {
            res.json({
                message: "successfully",
                appointment_data: rows.map(row => {
                    return {
                        ...row,
                        image: 'http://localhost:3000/img/' + row.image,
                    }
                })
            });
        }
    });
}

const getAppointmentId = function (req, res) {
    let id = req.params.id;
    connection.query(`SELECT a.*, 
        d.name AS doctor_name,d.phone_number, 
        d.specialization, d.qualification, d.image,
        p.user_id, p.name AS patient_name, p.gender, p.address, 
        p.date_of_birth, p.phone_number, p.email 
        FROM tbl_appointments a JOIN tbl_doctors d ON a.doctor_id = d.doctor_id JOIN tbl_patients p ON a.patient_id = p.patient_id WHERE appointment_id = ` + id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                message: "successfully",
                appointment_data: ''
            });
        } else {
            res.json({
                message: "successfully",
                appointment_data: rows.map(row => {
                    return {
                        ...row,
                        image: 'http://localhost:3000/img/' + row.image,
                    }
                })
            });
        }
    });
}

const createAppointment = async function (req, res) {
    try {
        let { doctor_id, patient_id, day } = req.body;
        let { user_id, name, gender, address, date_of_birth, phone_number, email } = req.body;
        let queue_no;
        let status = "Will come";
        let date = new Date();

        if(day == 'today'){
            date = date.toISOString().slice(0, 10);
        }else if(day == 'tomorrow'){
            date.setDate(date.getDate() + 1);
            date = date.toISOString().slice(0, 10);
        }else{
            return res.status(400).json({ message: 'The day field has not been filled in, please fill it in completely.' });
        }

        if (!doctor_id) {
            return res.status(400).json({ message: 'The doctor_id field has not been filled in, please fill it in completely.' });
        }

        if (!patient_id) {
            const insertPatient = await new Promise((resolve, reject) => {
                connection.query('INSERT INTO tbl_patients SET ?', { user_id, name, gender, address, date_of_birth, phone_number, email }, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        patient_id = result.insertId;
                        resolve();
                    }
                });
            });

            if (insertPatient instanceof Error) {
                throw insertPatient;
            }
        }

        const checkDoctor = await new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.length === 0) {
                    reject(new Error('The doctor with this ID was not found'));
                } else {
                    resolve();
                }
            });
        });

        if (checkDoctor instanceof Error) {
            throw checkDoctor;
        }

        const checkPatient = await new Promise((resolve, reject) => {
            connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [patient_id], (err, result) => {
                if (err) {
                    reject(err);
                } else if (result.length === 0) {
                    reject(new Error('The patient with this ID was not found'));
                } else {
                    resolve();
                }
            });
        });

        if (checkPatient instanceof Error) {
            throw checkPatient;
        }

        const getNextQueueNumber = await new Promise((resolve, reject) => {
            connection.query('SELECT MAX(queue_no) AS max_queue_no FROM tbl_appointments WHERE doctor_id = ? AND date = ?', [doctor_id, date], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    queue_no = (result[0].max_queue_no || 0) + 1;
                    resolve();
                }
            });
        });

        if (getNextQueueNumber instanceof Error) {
            throw getNextQueueNumber;
        }

        const insertAppointment = await new Promise((resolve, reject) => {
            const formData = {
                doctor_id,
                patient_id,
                date,
                queue_no,
                status
            };

            connection.query('INSERT INTO tbl_appointments SET ?', formData, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        if (insertAppointment instanceof Error) {
            throw insertAppointment;
        }

        await new Promise((resolve, reject) => {
            connection.query('SELECT email FROM tbl_patients WHERE patient_id = ?', [patient_id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    email = result[0].email;
                    resolve();
                }
            });
        });

        const timeOpen = process.env.TIME_OPEN;
        const timeSend = process.env.TIME_SEND_REMINDER;
        const hourOpen = timeOpen.split(':')[0];
        const minuteOpen = timeOpen.split(':')[1];
        const hourSend = timeSend.split(':')[0];
        const minuteSend = timeSend.split(':')[1];
        const now = new Date().getTime();

        if(queue_no == 1 || queue_no == 2){
            const getDate = date.split('-')[2];
            if(now < new Date().setHours(hourOpen, minuteOpen, 0, 0) && now > new Date().setHours(hourSend, minuteSend, 0, 0) && new Date().getDate() == getDate){
                sendEmail(email, 'Reminder', 'Antrian nomor ' + queue_no + ' Janji temu anda akan dimulai jam ' + process.env.TIME_OPEN + '.');
            }else if(now > new Date().setHours(hourOpen, minuteOpen, 0, 0) && new Date().getDate() == getDate){
                sendEmail(email, 'Segera ke klinik', `Antrian nomor ${queue_no}, janji temu anda sudah bisa dimulai, segera datang ke klinik`);
            }else{
                setReminder(email, queue_no, getDate);
            }
        }

        res.status(200).json({ message: 'Data saved successfully!' });

    } catch (error) {
        console.error('Error in createAppointment:', error);
        res.status(500).json({ message: 'An error occurred on the server.', error: error.message });
    }
};

const updateAppointement = function (req, res) {
    let id = req.params.id;
    let doctor_id = req.body.doctor_id;
    let patient_id = req.body.patient_id;
    let date = req.body.date;
    let queue_no = req.body.queue_no;
    let status = req.body.status;
    let rating = req.body.rating;
    let review = req.body.review;
    let errors = [];

    if (!date) {
        errors.push('The date field cannot be empty!');
    }

    if (!queue_no) {
        errors.push('The queue_no field cannot be empty!');
    }

    if (!status) {
        errors.push('The status field cannot be empty!');
    }

    if (!rating) {
        errors.push('The rating field cannot be empty!');
    }

    if (!review) {
        errors.push('The review field cannot be empty!');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
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
        return;
    }

    connection.query('UPDATE tbl_appointments SET ? WHERE appointment_id = ' + id, {status}, async function (err, result) {

        if (err) {
            res.send('error', err);
            res.json({
                id: req.params.id,
                status: status
            })
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Appointment ID not found!' });
                return;
            }

            let queue_no, doctor_id, date;

            await new Promise((resolve, reject) => {
                connection.query('SELECT * FROM tbl_appointments WHERE appointment_id = ' + id, function(err, result){
                    if(err) {
                        reject(err);
                    }else {
                        if (result.length === 0) {
                            res.status(404).json({ message: 'Appointment data not found after update!' });
                            return;
                        }

                        queue_no = result[0].queue_no;
                        doctor_id = result[0].doctor_id;
                        date = result[0].date;
                        resolve();
                    }
                })
            })

            connection.query('SELECT * FROM  tbl_appointments JOIN tbl_patients ON tbl_appointments.patient_id = tbl_patients.patient_id WHERE queue_no=? AND doctor_id=? AND date=?', [queue_no + 2, doctor_id, date], function (err, result){
                if(err){
                    console.log(err);
                }else if(result.length > 0){
                    sendEmail(result[0].email, "Reminder", `Antrian dengan nomor ${result[0].queue_no} jadwal appointment anda akan segera tiba mohon untuk datang ke klinik`);
                }
            });

            res.send({ message: 'Data updated successfully!'});
        }
    });
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
            if (result.affectedRows === 0) {
                res.status(404).send({ message: 'ID does not exist' });
            } else {
                res.send({ message: 'Data updated successfully!'});
            }
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