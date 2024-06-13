var connection = require('../library/database');

const createRegister = function (req, res) {
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

        connection.query(`INSERT INTO tbl_users (username,email,password) VALUES (?,?,SHA2(?,512));`, [username, email, password], function(err, result) {
            if (err) {
                res.json({message: err});
            } else {
                res.send('Data saved successfully!');
            }
        })
    
}

module.exports = {
    createRegister
}