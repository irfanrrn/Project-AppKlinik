var nodemailer = require('nodemailer');
var cron = require('node-cron');
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',   
    auth: {
    user: 'raihanrizki83@gmail.com',        
    pass: 'lopm tapb fign dgmn'
}});

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

const setReminder = (email, queue_no, date) => {
    const timeSend = process.env.TIME_SEND_REMINDER;    
    const hour = timeSend.split(':')[0];
    const minute = timeSend.split(':')[1];    
    cron.schedule('' + minute + ' ' + hour + ' ' + date + ' * *', () => {
        sendEmail(email, 'Reminder', 'Antrian nomor ' + queue_no + ' Janji temu anda akan dimulai jam ' + process.env.TIME_OPEN + '.');    }, {
        timezone: "Asia/Jakarta"    
    });
}
module.exports = { setReminder, sendEmail };