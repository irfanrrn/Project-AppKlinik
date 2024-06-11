var connection = require('../library/database');

const getAllPatient = function (req, res) {
    connection.query('SELECT * FROM tbl_patients', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_patient: ''
            });
        } else {
            res.json( {
                data_patient: rows
            });
        }
    });
}

const getPatientId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_patients WHERE patient_id = '+ id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_patient: ''
            });
        } else {
            res.json( {
                data_patient: rows
            });
        }
    });
}

const createPatient = function (req, res) {
    let name = req.body.name;
    let gender = req.body.gender;
    let address = req.body.address;
    let date_of_birth = req.body.date_of_birth;
    let phone_number = req.body.phone_number;
    let errors = false;

    if(!name) {
        errors = true;
        res.json({pesan: 'Field name belum diisi, mohon isi dengan lengkap.'});
    }

    if(!gender) {
        errors = true;
        res.json({pesan: 'Field gender belum diisi, mohon isi dengan lengkap.'});
    }

    if(!address) {
        errors = true;
        res.json({pesan: 'Field address belum diisi, mohon isi dengan lengkap.'});
    }

    if(!date_of_birth) {
        errors = true;
        res.json({pesan: 'Field date_of_birth belum diisi, mohon isi dengan lengkap.'});
    }

    if(!phone_number) {
        errors = true;
        res.json({pesan: 'Field phone_number belum diisi, mohon isi dengan lengkap.'});
    }

    if(!errors) {
        let formData = {
            name: name,
            gender: gender,
            address: address,
            date_of_birth: date_of_birth,
            phone_number: phone_number
        }

        connection.query('INSERT INTO tbl_patients SET ?', formData, function(err, result) {
            if (err) {
                res.json({err});
            } else {
                res.send('Data berhasil disimpan!');
            }
        })
    }
}

const updatePatient = function(req, res) {
    let id = req.params.id;
    let name = req.body.name;
    let gender = req.body.gender;
    let address = req.body.address;
    let date_of_birth = req.body.date_of_birth;
    let phone_number = req.body.phone_number;
    let errors = false;

    if(!name) {
        errors = true;
        res.json({pesan: 'Field name tidak boleh kosong!'});
    }

    if(!gender) {
        errors = true;
        res.json({pesan: 'Field gender tidak boleh kosong!'});
    }

    if(!address) {
        errors = true;
        res.json({pesan: 'Field address tidak boleh kosong!'});
    }

    if(!date_of_birth) {
        errors = true;
        res.json({pesan: 'Field date_of_birth tidak boleh kosong!'});
    }

    if(!phone_number) {
        errors = true;
        res.json({pesan: 'Field phone_number tidak boleh kosong!'});
    }

    if(!errors) {
        let formData = {
            name: name,
            gender: gender,
            address: address,
            date_of_birth: date_of_birth,
            phone_number: phone_number
        }

        connection.query('UPDATE tbl_patients SET ? WHERE patient_id = ' + id, formData, function(err, result) {

            if (err) {
                res.send('error', err);
                res.json({
                    id: req.params.id,
                    name: formData.name,
                    gender: formData.gender,
                    address: formData.address,
                    date_of_birth: formData.date_of_birth,
                    phone_number: formData.phone_number
                })
            } else {
                res.send('Data berhasil diupdate!');
            }
        })
    }
}

const deletePatient = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_patients WHERE patient_id = '+ id, function(err, result) {
        if (err) {
            res.send('error', err)
        } else {
            if(result.affectedRows === 0){
                res.send('Id tidak ada');
            }else {
                res.send('Data berhasil dihapus!');
            }
        }
    })
}

module.exports = {
    getAllPatient,
    getPatientId,
    createPatient,
    updatePatient,
    deletePatient
}