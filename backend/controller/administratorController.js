var connection = require('../library/database');

const getAllAdministrator = function (req, res) {
    const q = req.query.q;

    if(q) {
        const searchTerm = `%${q}%`;
        connection.query('SELECT * FROM tbl_administrators WHERE username LIKE ?', [searchTerm], (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } else {
        connection.query('SELECT * FROM tbl_administrators', function (err, rows) {
            if (err) {
                res.send('error', err);
                res.json({
                    message: "successfully",
                    administrator_data: ''
                });
            } else {
                res.json( {
                    message: "successfully",
                    administrator_data: rows
                });
            }
        });
    } 
}

const getAdministratorId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_administrators WHERE admin_id = '+ id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                message: "successfully",
                administrator_data: ''
            });
        } else {
            res.json( {
                message: "successfully",
                administrator_data: rows
            });
        }
    });
}

const createAdministrator = function (req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (!username) {
        errors.push('The username field has not been filled in, please fill it in completely.');
    }

    if (!email) {
        errors.push('The email field has not been filled in, please fill it in completely.');
    } else if (!emailRegex.test(email)) {
        errors.push('The email format is invalid, please fill in the correct email.');
    }

    if (!password) {
        errors.push('The password field has not been filled in, please fill it in completely.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
    }

    connection.query(`INSERT INTO tbl_administrators (username, email, password) VALUES (?,?,SHA2(?,512));`, [username, email, password], function(err, result) {
        if (err) {
            res.json({ message: 'Data failed to save' });
        } else {
            res.send({
                message: 'Data saved successfully!'});
        }
    });
}

const updateAdministrator = function(req, res) {
    let id = req.params.id;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username) {
        errors.push('The username field cannot be empty!');
    }

    if (!email) {
        errors.push('The email field cannot be empty!');
    } else if (!emailRegex.test(email)) {
        errors.push('The email format is invalid, please fill in the correct email.');
    }

    if (!password) {
        errors.push('The password field cannot be empty!');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
    }

    connection.query(
        `UPDATE tbl_administrators SET username = ?, email = ?, password = SHA2(?, 512) WHERE admin_id = ?`, 
        [username, email, password, id], 
        function(err, result) {
            if (err) {
                res.status(500).json({ message: 'Data failed to update', error: err });
            } else {
                res.send({ message: 'Data updated successfully!'});
            }
        }
    );
}

const deleteAdministrator = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_administrators WHERE admin_id = ?', [id], function(err, result) {
        if (err) {
            res.status(500).send({ message: 'There is an error', error: err });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ message: 'ID does not exist' });
            } else {
                res.send({ message: 'Data deleted successfully!'});
            }
        }
    });
};

module.exports = {
    getAllAdministrator,
    getAdministratorId,
    createAdministrator,
    updateAdministrator,
    deleteAdministrator
}