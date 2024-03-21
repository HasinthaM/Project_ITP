// create data models to data structures
const mongoose = require('mongoose');

const Schema = mongoose.Schema; //schema to create model

//create model
const packageSchema = new Schema({  //blue print for property for use
   
    pID: {
        type: String,
        required: true
    }, 

    province: {
        type: String,
        required: true
    },

    packageName: {
        type: String,
        required: true
    },

    places: {
        type: String,
        required: true
    },

    meals:{
        type: String,
        required: true
    },

    activities: {
        type: String,
        required: true
    },

    accommodation: {
        type: String,
        required: true
    },

    price : {
        type: String,
        required: true
    },

});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
