var connection = require('../library/database');
const path = require('path');
const fs = require('fs');

const getAllDoctor = function (req, res) {
    const q = req.query.q;

    if(q) {
        const searchTerm = `%${q}%`;
        connection.query('SELECT * FROM tbl_doctors WHERE name LIKE ?', [searchTerm], (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } else {
        connection.query('SELECT * FROM tbl_doctors', function (err, rows) {
            if (err) {
                res.send('error', err);
                res.json({
                    message: "successfully",
                    doctor_data: ''
                });
            } else {
                res.json( {
                    message: "successfully",
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
        } else {
            if (rows.length === 0) {
                res.status(404).send({ message: 'ID does not exist' });
            } else {
                res.json( {
                    message: "successfully",
                    doctor_data: rows
                });
            } 
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
            res.send({
            message: 'Data saved successfully!'
            });
        }
    });
}

const updateDoctor = function (req, res) {
    let id = req.params.id;
    let name = req.body.name;
    let phone_number = req.body.phone_number;
    let specialization = req.body.specialization;
    let qualification = req.body.qualification;
    let image = req.file.filename;
    let errors = [];

    connection.query('SELECT image FROM tbl_doctors WHERE doctor_id = ?', [id], function (err, rows) {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch current image', error: err });
        }

        if (rows.length > 0) {
            const oldImageName = rows[0].image;
            const oldImagePath = path.join(__dirname, '../img', oldImageName);

            if (fs.existsSync(oldImagePath)) {
                fs.unlink(oldImagePath, (err) => {
                    if (err) {
                        console.error('Failed to delete old image:', err);
                    }
                });
            }
        }

        const formData = {
            name,
            phone_number,
            specialization,
            qualification,
            image
        };

        connection.query('UPDATE tbl_doctors SET ? WHERE doctor_id = ?', [formData, id], function (err, result) {
            if (err) {
                return res.status(500).json({ message: 'Data failed to update', error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).send({ message: 'ID does not exist' });
                } else {
                    res.send({
                        message: 'Data updated successfully!'
                    });
                }
            }
        });
    });
}

const deleteDoctor = function(req, res) {
    let id = req.params.id;

    connection.query('SELECT image FROM tbl_doctors WHERE doctor_id = ?', [id], function (err, rows) {

        if (err) {
            return res.status(500).json({ message: 'Failed to fetch image', error: err });
        }

        if (rows.length > 0) {
            const imageName = rows[0].image;
            const imagePath = path.join(__dirname, '../img', imageName);

            if (fs.existsSync(imagePath)) {
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        console.error('Failed to delete image:', err);
                    }
                });
            }
        }    
        connection.query('DELETE FROM tbl_doctors WHERE doctor_id = ?', [id], function(err, result) {
            if (err) {
                res.status(500).send({ message: 'There is an error', error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).send({ message: 'ID does not exist' });
                } else {
                    res.send({
                        message: 'Data deleted successfully!'
                    });
                }
            }
        });
    });
};

module.exports = {
    getAllDoctor,
    getDoctorId,
    createDoctor,
    updateDoctor,
    deleteDoctor
}