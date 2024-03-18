const express = require('express');
const app = express(); //app -express instance
const cors = require('cors');
const controller = require('./controller/User/controller');
const E_controller = require('./controller/Employee/E_controller')

app.use(cors()); //middle ware to unblock cors

app.use(
     express.urlencoded({
          extended: true,
     })
);

app.use(express.json());

//Rest API
app.get('/users', (req, res) => {
     controller.getUsers(req, res, next => {
          res.send();
     });
});

//Rest API
app.post('/createuser', (req, res) => {
     controller.addUser(req.body, (callack) => {
          res.send();
     });
});

app.post('/updateuser', (req, res) => {
     controller.updateUser(req.body, (callack) => {
          res.send(callack);
     });
});

app.post('/deleteuser', (req, res) => {
     controller.deleteUser(req.body, (callack) => {
          res.send(callack);
     });
});

app.get('/employee', (req, res) => {
     E_controller.getEmployee(req, res, next => {
          res.send();
     });
});

//Rest API
app.post('/createemployee', (req, res) => {
     E_controller.addEmployee(req.body, (callack) => {
          res.send();
     });
});

app.post('/updateemployee', (req, res) => {
     E_controller.updateEmployee(req.body, (callack) => {
          res.send(callack);
     });
});

app.post('/deleteemployee', (req, res) => {
     E_controller.deleteEmployee(req.body, (callack) => {
          res.send(callack);
     });
});

module.exports = app;



