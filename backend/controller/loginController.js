var connection = require('../library/database');
var crypto = require('crypto');

const createLogin = function(req, res){
    const {email, password} = req.body;

    connection.query('SELECT * FROM tbl_users WHERE email = ?', [email], async (err, userResults) => {
        if (err) {
          res.status(500).json({ message: 'Error logging in' });
        } else if (userResults.length > 0) {
          const user = userResults[0];
          const match = await crypto.createHash('sha256').update(password).digest('hex');
    
          if (match) {
            req.session.user = user;
            res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username, email: user.email, role: 'user' } });
          } else {
            res.status(401).json({ message: 'Invalid email or password' });
          }
        } else {
          connection.query('SELECT * FROM tbl_administrators WHERE email = ?', [email], async (err, adminResults) => {
            if (err) {
              res.status(500).json({ message: 'Error logging in' });
            } else if (adminResults.length > 0) {
              const admin = adminResults[0];
              const match = await crypto.createHash('sha256').update(password).digest('hex');
    
              if (match) {
                req.session.admin = admin;
                res.status(200).json({ message: 'Login successful', user: { id: admin.id, username: admin.username, email: admin.email, role: 'admin' } });
              } else {
                res.status(401).json({ message: 'Invalid email or password' });
              }
            } else {
              res.status(401).json({ message: 'user not found' });
            }
          });
        }
    });
}
module.exports = {
    createLogin
}