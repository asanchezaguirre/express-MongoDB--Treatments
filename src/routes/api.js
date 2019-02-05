const { Router } = require('express');
const app = Router();

//requerir Auth.js
const isAuthenticated = require('../../services/Auth');

const Users = require('../controllers/users/users');
const Treatments = require('../controllers/treatments/treatments');
const Appointments = require('../controllers/appointments/appointments');

//Users Routes
app.get('/users', isAuthenticated, Users.index);
app.get('/users/:userId', isAuthenticated, Users.findBy);
app.get('/users/:userId/treatments', Users.findTreatmentsBy)
//app.post('/users', Users.create);
app.put('/users/:userId', Users.updateBy);

//crear ruta para poder crear un usuario
//auth routes
app.post('/auth/signup', Users.signup);
app.post('/auth/login', Users.login);


//Treatments Routes
app.get('/treatments', Treatments.index);
app.get('/treatments/:treatmentId', Treatments.findBy);
//app.get('/treatments/:treatmentId/appointments', Treatments.findAppointmentsBy)
app.post('/treatments', Treatments.create);


//Appointments Routes
app.get('/appointments', Appointments.index);
//app.get('/appointments/:appointmentId', Appointments.findBy);
//app.post('/appointments', Appointments.create);
//app.put('/appointments/:userId', Appointments.updateBy);
//app.delete('/appointments/:userId', Appointments.removeBy);

module.exports = app;