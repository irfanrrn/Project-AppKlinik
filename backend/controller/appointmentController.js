var connection = require('../library/database');
var nodemailer = require('nodemailer');
var cron = require('node-cron');

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

// const createAppointment = async function (req, res) {
//     let doctor_id = req.body.doctor_id;
//     let patient_id = req.body.patient_id;
//     let { user_id, name, gender, address, date_of_birth, phone_number } = req.body;
//     let date = req.body.date;
//     let queue_no;
//     let status = "Will come";
//     let errors = [];

//     if (!doctor_id) {
//         errors.push('The doctor_id field has not been filled in, please fill it in completely.');
//     }

//     if (!patient_id) {
//         await new Promise(function (resolve, reject) {
//             connection.query('INSERT INTO tbl_patients set ?', { user_id, name, gender, address, date_of_birth, phone_number },
//                 function (err, result) {
//                     if (err) {
//                         res.json(err);
//                         reject('error')
//                     }
//                     patient_id = result.insertId;
//                     resolve('succeed');
//                 })
//         })
//     }

//     if (!date) {
//         errors.push('The date field has not been filled in, please fill it in completely.' );
//     }

//     connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, result) {
//         if (err) {
//             return res.status(500).json({ message: 'An error occurred on the server while checking doctor_id', err });
//         }
//         if (result.length === 0) {
//             return res.status(400).json({ message: 'The doctor with this ID was not found' });
//         }
//     })

//     connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [patient_id], function (err, result) {
//         if (err) {
//             return res.status(500).json({ message: 'An error occurred on the server while checking patient_id' });
//         }

//         if (result.length === 0) {
//             return res.status(400).json({ message: 'The patient with this ID was not found' });
//         }
//     })

//     if (errors.length > 0) {
//         return res.status(400).json({ message: errors });
//     }

//     connection.query('SELECT MAX(queue_no) AS max_queue_no FROM tbl_appointments WHERE doctor_id = ? AND date = ?', [doctor_id, date], function (err, result) {
//         if (err) {
//             return res.status(500).json({ message: 'An error occurred on the server when determining the queue number', err });
//         }

//         queue_no = (result[0].max_queue_no || 0) + 1;

//         if (!errors) {
//             let formData = {
//                 doctor_id,
//                 patient_id,
//                 date,
//                 queue_no,
//                 status
//             };

//             connection.query('INSERT INTO tbl_appointments SET ?', formData, function (err, result) {
//                 if (err) {
//                     res.json(err);
//                 } else {
//                     res.send({ message: 'Data saved successfully!'});
//                 }
//             });
//         }
//     });
// }

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raihanrizki83@gmail.com',
        pass: 'lopm tapb fign dgmn'
    }
});

// Fungsi untuk mengirim email
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'raihanrizki83@gmail.com',
        to: to,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

const createAppointment = async function (req, res) {
    try {
        let { doctor_id, patient_id, date } = req.body;
        let { user_id, name, gender, address, date_of_birth, phone_number, email } = req.body;
        let queue_no;
        let status = "Will come";

        if (!doctor_id) {
            return res.status(400).json({ message: 'The doctor_id field has not been filled in, please fill it in completely.' });
        }

        if (!date) {
            return res.status(400).json({ message: 'The date field has not been filled in, please fill it in completely.' });
        }

        if (!patient_id) {
            // Insert new patient if patient_id is not provided
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

            // Handle error if patient insertion fails
            if (insertPatient instanceof Error) {
                throw insertPatient;
            }
        }

        // Check if doctor_id exists
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

        // Handle error if doctor_id check fails
        if (checkDoctor instanceof Error) {
            throw checkDoctor;
        }

        // Check if patient_id exists
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

        // Handle error if patient_id check fails
        if (checkPatient instanceof Error) {
            throw checkPatient;
        }

        // Get the next queue number for the appointment
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

        // Handle error if queue number retrieval fails
        if (getNextQueueNumber instanceof Error) {
            throw getNextQueueNumber;
        }

        // Insert the appointment into the database
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

        // Handle error if appointment insertion fails
        if (insertAppointment instanceof Error) {
            throw insertAppointment;
        }

        // If everything is successful, send success message
        res.status(200).json({ message: 'Data saved successfully!' });

    } catch (error) {
        // Handle any error that occurred during the process
        console.error('Error in createAppointment:', error);
        res.status(500).json({ message: 'An error occurred on the server.', error: error.message });
    }

        try {
            const now = new Date();
            const todayDate = now.toISOString().slice(0, 10);
            const practiceStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 35, 0, 0);
            const oneHourBeforePractice = new Date(practiceStartTime.getTime() - 60 * 60 * 1000);
    
            if (now < practiceStartTime) {
                connection.query('SELECT * FROM tbl_appointments WHERE queue_no IN (1, 2) AND date = ?', [todayDate], (err, results) => {
                    if (err) {
                        return console.error('Error querying appointment:', err);
                    }
    
                    results.forEach(appointment => {
                        connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [appointment.patient_id], (err, patientResults) => {
                            if (err) {
                                return console.error('Error querying patient:', err);
                            }
    
                            if (patientResults.length > 0) {
                                const patient = patientResults[0];
                                sendEmail(patient.email, 'Pengingat: Janji Temu', `Antrian nomor ${appointment.queue_no}, janji temu Anda akan dimulai pada jam 08:00`);
                            }
                        });
                    });
                });
    
                console.log('Pengingat satu jam sebelum praktik dijadwalkan untuk dikirim pada:', oneHourBeforePractice);
            } else {
                connection.query('SELECT * FROM tbl_appointments WHERE date = ? AND queue_no IN (1, 2) AND status = "Will come"', [todayDate], (err, results) => {
                    if (err) {
                        return console.error('Error querying appointment:', err);
                    }
    
                    results.forEach(appointment => {
                        connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [appointment.patient_id], (err, patientResults) => {
                            if (err) {
                                return console.error('Error querying patient:', err);
                            }
    
                            if (patientResults.length > 0) {
                                const patient = patientResults[0];
                                sendEmail(patient.email, 'Segera Datang ke Klinik', `Antrian nomor ${appointment.queue_no}, janji temu Anda sudah bisa dimulai. Segera datang ke klinik.`);
                            }
                        });
                    });
                });
    
                console.log('Pengingat setelah waktu praktik dijadwalkan.');
            }
        } catch (error) {
            console.error('Error dalam mengirim pengingat:', error);
        }
};

cron.schedule('35 0 * * *', () => {
    createAppointment();
}, {
    timezone: "Asia/Jakarta"
});

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