var connection = require('../library/database');

const getAllAppointment = function (req, res) {
    connection.query('SELECT * FROM tbl_appointments', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_appointment: ''
            });
        } else {
            res.json({
                data_appointment: rows
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
                data_appointment: ''
            });
        } else {
            res.json({
                data_appointment: rows
            });
        }
    });
}

const createAppointment = async function (req, res) {
    let doctor_id = req.body.doctor_id;
    let patient_id = req.body.patient_id;
    let { name, gender, address, date_of_birth, phone_number } = req.body;
    let date = req.body.date;
    let queue_no;
    let status = "Akan Datang";
    let errors = false;

    if (!doctor_id) {
        errors = true;
        res.json({ pesan: 'Field doctor_id belum diisi, mohon isi dengan lengkap.' });
    }

    if (!patient_id) {
        await new Promise(function (resolve, reject) {
            connection.query('INSERT INTO tbl_patients set ?', { name, gender, address, date_of_birth, phone_number },
                function (err, result) {
                    if (err) {
                        res.json(err);
                        reject('error')
                    }
                    patient_id = result.insertId;
                    resolve('berhasil');
                })
        })
    }

    if (!date) {
        errors = true;
        res.json({ pesan: 'Field date belum diisi, mohon isi dengan lengkap.' });
    }

    if (!status) {
        errors = true;
        res.json({ pesan: 'Field status belum diisi, mohon isi dengan lengkap.' });
    }

    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, result) {
        if (err) {
            return res.status(500).json({ pesan: 'Terjadi kesalahan pada server saat memeriksa doctor_id', err });
        }
        if (result.length === 0) {
            return res.status(400).json({ pesan: 'Doctor dengan id tersebut tidak ditemukan' });
        }
    })

    // connection.query('SELECT * FROM tbl_patients WHERE id_patient = ?', [id_patient], function (err, result){
    //     if(err){
    //         return res.status(500).json({pesan : 'Terjadi kesalahan pada server saat memeriksa id_patient'});
    //     }

    //     if(result.length === 0){
    //         return res.status(400).json({pesan : 'Patient dengan id tersebut tidak ditemukan'});
    //     }
    // })

    // Menentukan nomor antrian berikutnya untuk dokter tersebut pada tanggal tertentu
    connection.query('SELECT MAX(queue_no) AS max_queue_no FROM tbl_appointments WHERE doctor_id = ? AND date = ?', [doctor_id, date], function (err, result) {
        if (err) {
            return res.status(500).json({ pesan: 'Terjadi kesalahan pada server saat menentukan nomor antrian', err });
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
                    res.send('Data berhasil disimpan!');
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
        res.json({ pesan: 'Field date tidak boleh kosong!' });
    }

    if (!queue_no) {
        errors = true;
        res.json({ pesan: 'Field queue_no tidak boleh kosong!' });
    }

    if (!status) {
        errors = true;
        res.json({ pesan: 'Field status tidak boleh kosong!' });
    }

    if (!rating) {
        errors = true;
        res.json({ pesan: 'Field rating tidak boleh kosong!' });
    }

    if (!review) {
        errors = true;
        res.json({ pesan: 'Field review tidak boleh kosong!' });
    }

    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, result) {
        if (err) {
            return res.status(500).json({ pesan: 'Terjadi kesalahan pada server saat memeriksa doctor_id', err });
        }

        if (result.length === 0) {
            return res.status(400).json({ pesan: 'User dengan id tersebut tidak ditemukan' });
        }
    })

    connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [patient_id], function (err, result) {
        if (err) {
            return res.status(500).json({ pesan: 'Terjadi kesalahan pada server saat memeriksa patient_id' });
        }

        if (result.length === 0) {
            return res.status(400).json({ pesan: 'User dengan id tersebut tidak ditemukan' });
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
                res.send('Data berhasil diupdate!');
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
                res.send('Id tidak ada');
            } else {
                res.send('Data berhasil dihapus!');
            }
        }
    })
}

module.exports = {
    getAllAppointment,
    getAppointmentId,
    createAppointment,
    updateAppointement,
    deleteAppointment
}

