const connection = require('../library/database');

const getDashboard = function (req, res) {
    const currentDate = new Date().toISOString().split('T')[0];

    connection.query('SELECT * FROM tbl_appointments WHERE date = ?', [currentDate], (err, appointmentsResult) => {
        if (err) {
            console.error('Error executing appointments query:', err);
            return res.status(500).send('Server error');
        }

        const appointmentCount = appointmentsResult.length;

        connection.query('SELECT * FROM tbl_appointments WHERE date = ? AND status = ?', [currentDate, 'will come'], (err, willComeResults) => {
          if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Server error');
          } 

        const willComeCount = willComeResults.length;

        connection.query('SELECT * FROM tbl_appointments WHERE date = ? AND status = ?', [currentDate, 'completed'], (err, completedResults) => {
          if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Server error');
        }

        const completedCount = completedResults.length;

        connection.query(`
            SELECT d.name, d.specialization, COUNT(a.appointment_id) AS patientCount 
            FROM tbl_doctors d 
            LEFT JOIN tbl_appointments a ON a.doctor_id = d.doctor_id AND a.date = ? 
            GROUP BY d.name, d.specialization`, 
            [currentDate], (err, doctorsResult) => {
                if (err) {
                    console.error('Error executing doctors query:', err);
                    return res.status(500).send('Server error');
                }

                res.json({ 
                    message: "successfully",
                    number_of_appointment: appointmentCount,
                    number_will_come: willComeCount,
                    number_completed: completedCount,
                    patientCountByDoctors: doctorsResult
                });
            });
        })

         });
        
    });
}

module.exports = { getDashboard }
