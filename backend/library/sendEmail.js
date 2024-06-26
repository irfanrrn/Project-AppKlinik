var nodemailer = require('nodemailer');
var cron = require('node-cron');
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',   
    auth: {
    user: 'klinikghealth@gmail.com',        
    pass: 'rckx cxyb vhcy qfll'
}});

const sendEmail = (to, subject, text) => {    
    const mailOptions = {
        from: 'klinikghealth@gmail.com',        
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
        sendEmail(email, 'Reminder', 'Queue number ' + queue_no + ', your appointment will start at ' + process.env.TIME_OPEN + '.');    }, {
        timezone: "Asia/Jakarta"    
    });
}
module.exports = { setReminder, sendEmail };