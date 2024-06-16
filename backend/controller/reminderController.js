var connection = require('../library/database');
var nodemailer = require('nodemailer');

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

// Fungsi untuk mengirim pengingat
// Fungsi untuk mengirim pengingat
const sendReminders = async () => {
    try {
        // Atur waktu praktik dokter dimulai pada pukul 9 pagi
        var practiceStartTime = new Date(); // Mendapatkan waktu saat ini
        practiceStartTime.setHours(17, 0, 0, 0); // Set waktu praktik dokter mulai pada pukul 09:00:00

        // Hitung satu jam sebelum waktu praktik dokter
        var oneHourBeforePractice = new Date(practiceStartTime.getTime() - 60 * 60 * 1000);

        // Hitung delay sampai satu jam sebelum waktu praktik dokter
        var now = new Date();
        var delay = oneHourBeforePractice - now;

        // Jika delay negatif, artinya waktu sudah lewat, jadi tidak perlu set timeout
        // if (delay < 0) {
        //     const patient = delay;
        //     sendEmail(patient.email, 'Pengingat: Janji Temu Kurang Dari Satu Jam', Antrian nomor ${appointment.queue_no}, janji temu Anda akan dimulai kurang dari satu jam.);
        //     // console.log('Waktu praktik dokter kurang dari satu jam lagi. Tidak ada pengingat yang akan dikirim.');
        //     // return;
        // }

        // Set timeout untuk mengirim pengingat tepat pada waktunya
        setTimeout(() => {
            connection.query('SELECT * FROM tbl_appointments WHERE queue_no IN (1, 2)', (err, results) => {
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
                            sendEmail(patient.email, 'Pengingat: Janji Temu Dalam Satu Jam', `Antrian nomor ${appointment.queue_no}, janji temu Anda akan dimulai dalam satu jam.`);
                        } 
                    });
                });
            });
        }, delay);

        console.log('Pengingat dijadwalkan untuk dikirim pada:', oneHourBeforePractice);
    } catch (error) {
        console.error('Error dalam mengirim pengingat:', error);
    }
};

// Fungsi untuk memperbarui status
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
        res.status(200).send('Status diperbarui');
    });
};

// Jadwalkan fungsi pengingat untuk dijalankan sekali sehari (atau pada waktu tertentu)
const jadwalkanPengingat = () => {
    const now = new Date();
    const nextCheck = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Pukul 00:00 hari berikutnya
    const waktuHinggaNextCheck = nextCheck - now;

    setTimeout(() => {
        sendReminders();
        jadwalkanPengingat(); // Jadwalkan ulang untuk hari berikutnya
    }, waktuHinggaNextCheck);
};

// Mulai penjadwalan pengingat awal
jadwalkanPengingat();

module.exports = { sendReminders, updateStatus };