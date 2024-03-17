// create data models to data structures

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema to create model

//create model
const userSchema = new Schema({  //blue print for property for use
     id: Number,
     name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;


