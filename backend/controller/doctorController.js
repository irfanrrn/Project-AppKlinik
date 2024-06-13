var connection = require('../library/database');

const getAllDoctor = function (req, res) {
    connection.query('SELECT * FROM tbl_doctors', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_doctor: ''
            });
        } else {
            res.json( {
                data_doctor: rows
            });
        }
    });
}

const getDoctorId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = '+ id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_doctor: ''
            });
        } else {
            res.json( {
                data_doctor: rows
            });
        }
    });
}

const createDoctor = function (req, res) {
    let name = req.body.name;
    let phone_number = req.body.phone_number;
    let specialization = req.body.specialization;
    let qualification = req.body.qualification;
    let image = req.file.filename;
    let errors = [];

    if (!name) {
        errors.push('Field name belum diisi, mohon isi dengan lengkap.');
    }

    if (!phone_number) {
        errors.push('Field phone_number belum diisi, mohon isi dengan lengkap.');
    }

    if (!specialization) {
        errors.push('Field specialization belum diisi, mohon isi dengan lengkap.');
    }

    if (!qualification) {
        errors.push('Field qualification belum diisi, mohon isi dengan lengkap.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ pesan: errors });
    }

    let formData = {
        name: name,
        phone_number: phone_number,
        specialization: specialization,
        qualification: qualification,
        image: image
    }

    connection.query('INSERT INTO tbl_doctors SET ?', formData, function(err, result) {
        if (err) {
            res.status(500).json({ pesan: 'Data gagal disimpan' });
        } else {
            res.send('Data berhasil disimpan!');
        }
    });
}

const updateDoctor = function(req, res) {
    let id = req.params.id;
    let name = req.body.name;
    let phone_number = req.body.phone_number;
    let specialization = req.body.specialization;
    let qualification = req.body.qualification;
    let image = req.body.image;
    let errors = [];

    if (!name) {
        errors.push('Field name tidak boleh kosong!');
    }

    if (!phone_number) {
        errors.push('Field phone_number tidak boleh kosong!');
    }

    if (!specialization) {
        errors.push('Field specialization tidak boleh kosong!');
    }

    if (!qualification) {
        errors.push('Field qualification tidak boleh kosong!');
    }

    if (errors.length > 0) {
        return res.status(400).json({ pesan: errors });
    }

    let formData = {
        name: name,
        phone_number: phone_number,
        specialization: specialization,
        qualification: qualification,
        image: image
    }

    connection.query('UPDATE tbl_doctors SET ? WHERE doctor_id = ?', [formData, id], function(err, result) {
        if (err) {
            return res.status(500).json({ pesan: 'Data gagal diupdate', error: err });
        } else {
            res.send('Data berhasil diupdate!');
        }
    });
}

const deleteDoctor = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_doctors WHERE doctor_id = ?', [id], function(err, result) {
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
    getAllDoctor,
    getDoctorId,
    createDoctor,
    updateDoctor,
    deleteDoctor
}