var connection = require('../library/database');

const getDashboard = function (req, res){
    const currentDate = new Date().toISOString().split('T')[0];

    connection.query('SELECT * FROM tbl_appointments WHERE date = ?', [currentDate], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Server error');
          }else {
              const appointmentCount = result.length;
              res.json({
                number_of_appointment: appointmentCount
              });
          }
    })
}

module.exports = { getDashboard }