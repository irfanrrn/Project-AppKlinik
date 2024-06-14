var connection = require('../library/database');

const createLogin = function (req, res) {
    const {email, password} = req.body;

    connection.query('SELECT * FROM tbl_users WHERE email = ? AND password = SHA2(?, 512)', [email, password], async (err, userResults) => {
        if (err) {
            res.status(500).json({message: 'Error logging in'});
        } else if (userResults.length > 0) {
            const user = userResults[0];
            req.session.user = user;
            res.status(200).json({
                message: 'Login successful',
                user: {user_id: user.user_id, username: user.username, email: user.email, role: 'user'}
            });
        } else {
            connection.query('SELECT * FROM tbl_administrators WHERE email = ?  AND password = SHA2(?, 512)', [email, password], async (err, adminResults) => {
                if (err) {
                    res.status(500).json({message: 'Error logging in'});
                } else if (adminResults.length > 0) {
                    const admin = adminResults[0];
                    req.session.admin = admin;
                    res.status(200).json({
                        message: 'Login successful',
                        user: {admin_id: admin.admin_id, username: admin.username, email: admin.email, role: 'admin'}
                    });
                } else {
                    res.status(400).json({message: 'Invalid email or password'});
                }
            });
        }
    });
}
module.exports = {
    createLogin
}