// create data models to data structures

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema to create model

//create model
const employeeSchema = new Schema({  //blue print for property for use
     id: Number,
     name: String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;


