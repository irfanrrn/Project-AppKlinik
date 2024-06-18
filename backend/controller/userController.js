var connection = require('../library/database');

const getAllUser = function (req, res) {
    const q = req.query.q;

    if(q) {
        const searchTerm = `%${q}%`;
        connection.query('SELECT * FROM tbl_users WHERE username LIKE ?', [searchTerm], (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    } else {
        connection.query('SELECT * FROM tbl_users', function (err, rows) {
            if (err) {
                res.send('error', err);
                res.json({
                    message: "successfully",
                    user_data: ''
                });
            } else {
                res.json( {
                    message: "successfully",
                    user_data: rows
                });
            }
        });
    }
}

const getUserId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_users WHERE user_id = '+ id, function (err, rows) {
        if (err) {
            res.send('error', err);
        } else {
            if (rows.length === 0) {
                res.status(404).send({ message: 'ID does not exist' });
            } else {
                res.json({
                    message: "successfully",
                    user_data: rows
                });
            }
        }
    });
}

const createUser = function (req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if(!username) {
        errors.push('The username field has not been filled in, please fill it in completely.');
    }

    if(!email) {
        errors.push('The email field has not been filled in, please fill it in completely.');
    } else if (!emailRegex.test(email)) {
        errors.push('The email format is invalid, please fill in the correct email.');
    }

    if(!password) {
        errors.push('The password field has not been filled in, please fill it in completely.');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
    }

    connection.query(`INSERT INTO tbl_users (username,email,password) VALUES (?,?,SHA2(?,512));`, [username, email, password], function(err, result) {
        if (err) {
            res.json({message: err});
        } else {
            res.send({ message: 'Data saved successfully!'});
        }
    })
}

const updateUser = function(req, res) {
    let id = req.params.id;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if(!username) {
        errors.push('The username field cannot be empty!');
    }

    if(!email) {
        errors.push('The email field cannot be empty!');
    } else if (!emailRegex.test(email)) {
        errors.push('The email format is invalid, please fill in the correct email.');
    }

    if(!password) {
        errors.push('The password field cannot be empty!');
    }

    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
    }

    connection.query(`UPDATE tbl_users SET username = ?, email = ?, password = SHA2(?, 512) WHERE user_id = ?`,
        [username, email, password, id], function(err, result) {
            if (err) {
                res.status(500).json({ message: 'Data failed to update', error: err });
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).send({ message: 'ID does not exist' });
                } else {
                    res.send({ message: 'Data updated successfully!'});
                }
            }
        })
}

const deleteUser = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_users WHERE user_id = '+ id, function(err, result) {
        if (err) {
            res.send('error', err)
        } else {
            if(result.affectedRows === 0){
                res.send({ message: 'ID does not exist'});
            }else {
                res.send({ message: 'Data deleted successfully!'});
            }
        }
    })
}

module.exports = {
    getAllUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser
}