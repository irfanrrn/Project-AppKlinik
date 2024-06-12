var connection = require('../library/database');

const getAllUser = function (req, res) {
    connection.query('SELECT * FROM tbl_users', function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_user: ''
            });
        } else {
            res.json( {
                data_user: rows
            });
        }
    });
}

const getUserId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_users WHERE user_id = '+ id, function (err, rows) {
        if (err) {
            res.send('error', err);
            res.json({
                data_user: ''
            });
        } else {
            res.json( {
                data_user: rows
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
        res.json({pesan: 'Field username belum diisi, mohon isi dengan lengkap.'});
    }

    if(!email) {
        errors = true;
        res.json({pesan: 'Field email belum diisi, mohon isi dengan lengkap.'});
    }

    if(!password) {
        errors = true;
        res.json({pesan: 'Field password belum diisi, mohon isi dengan lengkap.'});
    }

    if(!errors) {
        connection.query(`INSERT INTO tbl_users (username,email,password) VALUES (?,?,SHA2(?,512));`, [username, email, password], function(err, result) {
            if (err) {
                res.json({pesan: err});
            } else {
                res.send('Data berhasil disimpan!');
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
        res.json({pesan: 'Field username tidak boleh kosong!'});
    }

    if(!email) {
        errors = true;
        res.json({pesan: 'Field email tidak boleh kosong!'});
    }

    if(!password) {
        errors = true;
        res.json({pesan: 'Field password tidak boleh kosong!'});
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
                res.send('Data berhasil diupdate!');
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
                res.send('Id tidak ada');
            }else {
                res.send('Data berhasil dihapus!');
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