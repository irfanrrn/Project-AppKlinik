var connection = require('../library/database');
var nodemailer = require('nodemailer');
var cron = require('node-cron');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raihanrizki83@gmail.com',
        pass: 'lopm tapb fign dgmn'
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

// Fungsi untuk mengirim pengingat
const sendReminders = async () => {
    try {
        const now = new Date();
        const todayDate = now.toISOString().slice(0, 10);
        const practiceStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 35, 0, 0);
        const oneHourBeforePractice = new Date(practiceStartTime.getTime() - 60 * 60 * 1000);

        if (now < practiceStartTime) {
            connection.query('SELECT * FROM tbl_appointments WHERE queue_no IN (1, 2) AND date = ?', [todayDate], (err, results) => {
                if (err) {
                    return console.error('Error querying appointment:', err);
                }

                results.forEach(appointment => {
                    connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [appointment.patient_id], (err, patientResults) => {
                        if (err) {
                            return console.error('Error querying patient:', err);
                        }

                        if (patientResults.length > 0) {
                            const patient = patientResults[0];
                            sendEmail(patient.email, 'Pengingat: Janji Temu', `Antrian nomor ${appointment.queue_no}, janji temu Anda akan dimulai pada jam 08:00`);
                        }
                    });
                });
            });

            console.log('Pengingat satu jam sebelum praktik dijadwalkan untuk dikirim pada:', oneHourBeforePractice);
        } else {
            connection.query('SELECT * FROM tbl_appointments WHERE date = ? AND queue_no IN (1, 2) AND status = "Will come"', [todayDate], (err, results) => {
                if (err) {
                    return console.error('Error querying appointment:', err);
                }

                results.forEach(appointment => {
                    connection.query('SELECT * FROM tbl_patients WHERE patient_id = ?', [appointment.patient_id], (err, patientResults) => {
                        if (err) {
                            return console.error('Error querying patient:', err);
                        }

                        if (patientResults.length > 0) {
                            const patient = patientResults[0];
                            sendEmail(patient.email, 'Segera Datang ke Klinik', `Antrian nomor ${appointment.queue_no}, janji temu Anda sudah bisa dimulai. Segera datang ke klinik.`);
                        }
                    });
                });
            });

            console.log('Pengingat setelah waktu praktik dijadwalkan.');
        }
    } catch (error) {
        console.error('Error dalam mengirim pengingat:', error);
    }
};

// Fungsi untuk memperbarui status
const updateStatus = (req, res) => {
    const { id, status } = req.body;

    connection.query('UPDATE tbl_appointments SET status = ? WHERE appointment_id = ?', [status, id], (err, result) => {
        if (err) {
            return res.status(500).send('Error updating status');
        }

        if (status === 'completed' || status === 'cancelled') {
            const queue_no = parseInt(req.body.queue_no, 10);
            const nextQueue = queue_no + 2;

            connection.query('SELECT * FROM tbl_appointments WHERE queue_no = ? AND status = "Will come"', [nextQueue], (err, appointmentResults) => {
                if (err) {
                    return console.error('Error querying appointment:', err);
                }

                if (appointmentResults.length > 0) {
                    const appointment = appointmentResults[0];
                    connection.query('SELECT * FROM tbl_patients WHERE id = ?', [appointment.patient_id], (err, patientResults) => {
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
        res.status(200).send('Status diperbarui');
    });
};

// Jadwalkan fungsi pengingat untuk dijalankan setiap hari pada pukul 15:00
cron.schedule('35 23 * * *', () => {
    sendReminders();
}, {
    timezone: "Asia/Jakarta"
});

module.exports = { sendReminders, updateStatus };
