var connection = require('../library/database');

const getAllPatient = function (req, res) {
    connection.query('SELECT * FROM tbl_patients', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                patient_data: ''
            });
        } else {
            res.json( {
                patient_data: rows
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
                patient_data: ''
            });
        } else {
            res.json( {
                patient_data: rows
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
        res.json({message: 'The name field has not been filled in, please fill it in completely.'});
    }

    if(!gender) {
        errors = true;
        res.json({message: 'The gender field has not been filled in, please fill it in completely.'});
    }

    if(!address) {
        errors = true;
        res.json({message: 'The address field has not been filled in, please fill it in completely.'});
    }

    if(!date_of_birth) {
        errors = true;
        res.json({message: 'The date_of_birth field has not been filled in, please fill it in completely.'});
    }

    if(!phone_number) {
        errors = true;
        res.json({message: 'The phone_number field has not been filled in, please fill it in completely.'});
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
                res.send('Data saved successfully!');
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
        res.json({message: 'The name field cannot be empty!'});
    }

    if(!gender) {
        errors = true;
        res.json({message: 'The gender field cannot be empty!'});
    }

    if(!address) {
        errors = true;
        res.json({message: 'The address field cannot be empty!'});
    }

    if(!date_of_birth) {
        errors = true;
        res.json({message: 'The date_of_birth field cannot be empty!'});
    }

    if(!phone_number) {
        errors = true;
        res.json({message: 'The phone_number field cannot be empty!'});
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
                res.send('Data updated successfully!');
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
                res.send('ID does not exist');
            }else {
                res.send('Data deleted successfully!');
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