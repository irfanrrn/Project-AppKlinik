var connection = require('../library/database');

const createRegister = function (req, res) {
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

        connection.query(`INSERT INTO tbl_users (username,email,password) VALUES (?,?,SHA2(?,512));`, [username, email, password], function(err, result) {
            if (err) {
                res.json({pesan: err});
            } else {
                res.send('Data berhasil disimpan!');
            }
        })
    
}

module.exports = {
    createRegister
}