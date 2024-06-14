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
    let user_id = req.body.user_id
    let name = req.body.name;
    let gender = req.body.gender;
    let address = req.body.address;
    let date_of_birth = req.body.date_of_birth;
    let phone_number = req.body.phone_number;
    let email = req.body.email;
    let errors = false;

    if(!user_id) {
        errors = true;
        res.json({message: 'The user_id field has not been filled in, please fill it in completely.'});
    }

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

    if(!email) {
        errors = true;
        res.json({message: 'The email field has not been filled in, please fill it in completely.'});
    }

    connection.query('SELECT * FROM tbl_users WHERE user_id = ?', [user_id], function (err, result) {
        if (err) {
            return res.status(500).json({ message: 'An error occurred on the server while checking user_id', err });
        }
        if (result.length === 0) {
            return res.status(400).json({ message: 'The user with this ID was not found' });
        }
    })

    if(!errors) {
        let formData = {
            user_id: user_id,
            name: name,
            gender: gender,
            address: address,
            date_of_birth: date_of_birth,
            phone_number: phone_number,
            email: email
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
    let user_id = req.params.user_id;
    let name = req.body.name;
    let gender = req.body.gender;
    let address = req.body.address;
    let date_of_birth = req.body.date_of_birth;
    let phone_number = req.body.phone_number;
    let email = req.body.email;
    let errors = false;

    if(!user_id) {
        errors = true;
        res.json({message: 'The user_id field cannot be empty!'});
    }

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

    if(!email) {
        errors = true;
        res.json({message: 'The email field cannot be empty!'});
    }

    if(!errors) {
        let formData = {
            user_id: user_id,
            name: name,
            gender: gender,
            address: address,
            date_of_birth: date_of_birth,
            phone_number: phone_number,
            email: email
        }

        connection.query('UPDATE tbl_patients SET ? WHERE patient_id = ' + id, formData, function(err, result) {

            if (err) {
                res.send('error', err);
                res.json({
                    id: req.params.id,
                    user_id: formData.user_id,
                    name: formData.name,
                    gender: formData.gender,
                    address: formData.address,
                    date_of_birth: formData.date_of_birth,
                    phone_number: formData.phone_number,
                    email: formData.email
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