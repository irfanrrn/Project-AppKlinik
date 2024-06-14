var connection = require('../library/database');

const getAllDoctor = function (req, res) {
    const q = req.query.q;

    if(q){
        const searchTerm = `%${q}%`;
        connection.query('SELECT * FROM tbl_doctors WHERE name LIKE ?', [searchTerm], (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    }else {
        connection.query('SELECT * FROM tbl_doctors', function (err, rows) {
            if (err) {
                res.send('error', err);
                res.json({
                    doctor_data: ''
                });
            } else {
                res.json( {
                    doctor_data: rows
                });
            }
        });
    }
}

const getDoctorId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_doctors WHERE doctor_id = '+ id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                doctor_data: ''
            });
        } else {
            res.json( {
                doctor_data: rows
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
        errors.push('The name field has not been filled in, please fill it in completely.');
    }

    if (!phone_number) {
        errors.push('The phone_number field has not been filled in, please fill it in completely.');
    }

    if (!specialization) {
        errors.push('The specialization field has not been filled in, please fill it in completely.');
    }

    if (!qualification) {
        errors.push('The qualification field has not been filled in, please fill it in completely.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
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
            res.status(500).json({ message: 'Data failed to save' });
        } else {
            res.send('Data saved successfully!');
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
        errors.push('The name field cannot be empty!');
    }

    if (!phone_number) {
        errors.push('The phone_number field cannot be empty!');
    }

    if (!specialization) {
        errors.push('The specialization field cannot be empty!');
    }

    if (!qualification) {
        errors.push('The qualification field cannot be empty!');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
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
            return res.status(500).json({ message: 'Data failed to update', error: err });
        } else {
            res.send('Data updated successfully!');
        }
    });
}

const deleteDoctor = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_doctors WHERE doctor_id = ?', [id], function(err, result) {
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
    getAllDoctor,
    getDoctorId,
    createDoctor,
    updateDoctor,
    deleteDoctor
}