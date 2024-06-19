var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var administratorRouter = require('./routes/administrator');
var doctorRouter = require('./routes/doctor');
var doctor_scheduleRouter = require('./routes/doctor_schedule');
var userRouter = require('./routes/user');
var patientRouter = require('./routes/patient');
var appointmentRouter = require('./routes/appointment');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var dashboardRouter = require('./routes/dashboard');

var app = express();

app.use(bodyParser.json());

app.use(cors("*"));
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/administrator', administratorRouter);
app.use('/doctor', doctorRouter);
app.use('/doctor_schedule', doctor_scheduleRouter);
app.use('/user', userRouter);
app.use('/patient', patientRouter);
app.use('/appointment', appointmentRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;