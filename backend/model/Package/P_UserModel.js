const mongoose = require('mongoose');

// Create model
const userSchema = new mongoose.Schema({
    province: {
        type: String,
        required: true
    },
    duration: {
        type: String, 
        required: true
    },
    noOfperson: {
        type: Number,
        required: true
    },
    vehicle: {
        type: String,
        required: true
    },
    places: {
        type: String,
        required: true
    },
    meals: {
        type: [String],
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
    price: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model('User', userSchema);
