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
                    user_data: ''
                });
            } else {
                res.json( {
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
            res.json({
                user_data: ''
            });
        } else {
            res.json( {
                user_data: rows
            });
        }
    });
}

const createUser = function (req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let errors = false;

    if(!username) {
        errors = true;
        res.json({message: 'The username field has not been filled in, please fill it in completely.'});
    }

    if(!email) {
        errors = true;
        res.json({message: 'The email field has not been filled in, please fill it in completely.'});
    }

    if(!password) {
        errors = true;
        res.json({message: 'The password field has not been filled in, please fill it in completely.'});
    }

    if(!errors) {
        connection.query(`INSERT INTO tbl_users (username,email,password) VALUES (?,?,SHA2(?,512));`, [username, email, password], function(err, result) {
            if (err) {
                res.json({message: err});
            } else {
                res.send('Data saved successfully!');
            }
        })
    }
}

const updateUser = function(req, res) {
    let id = req.params.id;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let errors = false;

    if(!username) {
        errors = true;
        res.json({message: 'The username field cannot be empty!'});
    }

    if(!email) {
        errors = true;
        res.json({message: 'The email field cannot be empty!'});
    }

    if(!password) {
        errors = true;
        res.json({message: 'The password field cannot be empty!'});
    }

    if(!errors) {
        let formData = {
            username: username,
            email: email,
            password: password
        }

        connection.query(`UPDATE tbl_users SET username = ?, email = ?, password = SHA2(?, 512) WHERE user_id = ?`,
        [username, email, password, id], function(err, result) {

            if (err) {
                res.send('error', err);
                res.json({
                    id: req.params.id,
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            } else {
                res.send('Data updated successfully!');
            }
        })
    }
}

const deleteUser = function(req, res) {
    let id = req.params.id;

    connection.query('DELETE FROM tbl_users WHERE user_id = '+ id, function(err, result) {
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
    getAllUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser
}