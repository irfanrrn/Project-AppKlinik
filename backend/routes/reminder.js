var express = require('express');
var router = express.Router();
var reminder = require('../controller/reminderController');

// Route untuk mengirim pengingat
// router.post('/sendReminders', reminder.sendReminders);
router.post('/sendReminders', async (req, res) => {
    await reminder.sendReminders();
    res.status(200).send('Reminders sent');
});

// Route untuk mengupdate status antrian
router.post('/updateStatus', reminder.updateStatus);

module.exports = router;
