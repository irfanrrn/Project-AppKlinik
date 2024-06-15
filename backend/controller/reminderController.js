var connection = require('../library/database');
var nodemailer = require('nodemailer');
var { getPracticeStartTime } = require('./utils.js');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raihanrizki83@gmail.com',
        pass: 'lopm tapb fign dgmn'
        //sandi : lopm tapb fign dgmn
    }
});

// Fungsi untuk mengirim email
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'raihanrizki83@gmail.com',
        to: to,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

const sendReminders = async () => {
    var practiceStartTime = await getPracticeStartTime(); // Fungsi untuk mendapatkan waktu praktik dokter
    var oneHourBeforePractice = new Date(practiceStartTime - 60 * 60 * 1000);

    connection.query('SELECT * FROM tbl_appointments WHERE queue_no IN (1, 2)', (err, results) => {
        if (err) {
            return console.error('Error querying appointment:', err);
        }

        results.forEach(appointment => {
            const reminderTime = new Date(oneHourBeforePractice);
            if (appointment.queue_no === 1 || appointment.queue_no === 2) {
                connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [appointment.patient_id], (err, patientResults) => {
                    if (err) {
                        return console.error('Error querying patient:', err);
                    }

                    if (patientResults.length > 0) {
                        const patient = patientResults[0];
                        sendEmail(patient.email, 'Reminder: Appointment in One Hour', `Antrian nomor ${appointment.queue_no}, janji temu Anda akan dimulai dalam satu jam.`);
                    }
                });
            }
        });
    });
};

const updateStatus = (req, res) => {
    const { id, status } = req.body;

    connection.query('UPDATE tbl_appointments SET status = ? WHERE id = ?', [status, id], (err, result) => {
        if (err) {
            return res.status(500).send('Error updating status');
        }

        if (status === 'completed' || status === 'cancelled') {
            connection.query('SELECT * FROM tbl_appointments WHERE queue_no = ? AND status = ?', [id, 'Will come'], (err, appointmentResults) => {
                if (err) {
                    return console.error('Error querying appointment:', err);
                }

                if (appointmentResults.length > 0) {
                    const appointment = appointmentResults[0];
                    connection.query('SELECT * FROM tbl_patients WHERE id = ?', [appointment.id], (err, patientResults) => {
                        if (err) {
                            return console.error('Error querying patient:', err);
                        }

                        if (patientResults.length > 0) {
                            const patient = patientResults[0];
                            sendEmail(patient.email, 'Antrian Anda Akan Segera Tiba', `Antrian nomor ${appointment.queue_no} akan segera dipanggil. Persiapkan diri Anda.`);
                        }
                    });
                }
            });
        }
        res.status(200).send('Status updated');
    });
};

module.exports = { sendReminders, updateStatus };