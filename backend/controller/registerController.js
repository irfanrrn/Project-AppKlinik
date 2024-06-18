var connection = require('../library/database');

const createRegister = function (req, res) {
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

module.exports = {
    createRegister
}