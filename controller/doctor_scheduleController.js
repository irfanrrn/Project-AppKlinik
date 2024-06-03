var connection = require('../library/database');

const getAllDoctorSchedule = function (req, res) {
    connection.query('SELECT * FROM tbl_doctors_schedules', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_doctor_schedule: ''
            });
        } else {
            res.json( {
                data_doctor_schedule: rows
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
                data_doctor_schedule: ''
            });
        } else {
            res.json( {
                data_doctor_schedule: rows
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
        errors.push('Field doctor_id belum diisi, mohon isi dengan lengkap.');
    }

    if (!from_day) {
        errors.push('Field from_day belum diisi, mohon isi dengan lengkap.');
    }

    if (!until_day) {
        errors.push('Field until_day belum diisi, mohon isi dengan lengkap.');
    }

    if (!start_time) {
        errors.push('Field start_time belum diisi, mohon isi dengan lengkap.');
    }

    if (!end_time) {
        errors.push('Field end_time belum diisi, mohon isi dengan lengkap.');
    }

    if (!room_number) {
        errors.push('Field room_number belum diisi, mohon isi dengan lengkap.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ pesan: errors });
    }

    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, results) {
        if (err) {
            return res.status(500).json({ pesan: 'Terjadi kesalahan pada server saat memeriksa dokter_id' });
        }

        if (results.length === 0) {
            return res.status(400).json({ pesan: 'Dokter dengan ID tersebut tidak ditemukan' });
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
                res.json({pesan: 'Data gagal disimpan'});
            } else {
                res.send('Data berhasil disimpan!');
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
        errors.push('Field doctor_id tidak boleh kosong!');
    }

    if (!from_day) {
        errors.push('Field from_day tidak boleh kosong!');
    }

    if (!until_day) {
        errors.push('Field until_day tidak boleh kosong!');
    }

    if (!start_time) {
        errors.push('Field start_time tidak boleh kosong!');
    }

    if (!end_time) {
        errors.push('Field end_time tidak boleh kosong!');
    }

    if (!room_number) {
        errors.push('Field room_number tidak boleh kosong!');
    }

    if (errors.length > 0) {
        return res.status(400).json({ pesan: errors });
    }

    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = ?', [doctor_id], function (err, results) {
        if (err) {
            return res.status(500).json({ pesan: 'Terjadi kesalahan pada server saat memeriksa dokter_id' });
        }

        if (results.length === 0) {
            return res.status(400).json({ pesan: 'Dokter dengan ID tersebut tidak ditemukan' });
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
                res.send('Data berhasil diupdate!');
            }
        });
    });
}

const deleteDoctorSchedule = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_doctors_schedules WHERE schedule_id = ?', [id], function(err, result) {
        if (err) {
            res.status(500).send({ pesan: 'Terjadi kesalahan', error: err });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ pesan: 'ID tidak ada' });
            } else {
                res.send('Data berhasil dihapus!');
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