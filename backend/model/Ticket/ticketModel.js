const mongoose = require("mongoose");

const uniqueValidator = require('mongoose-unique-validator');

const ticketSchema = new mongoose.Schema(
    {
      t_id: {
        type: String,
        unique: true,
        required: true
        },
      name: {
        type: String,
        required: true
      },
        email: {
          type: String,
          required: true
        },
        issueType: {
          type: String,
          required: true
        },

        issue: {
          type: String,
          required: true
        }
    },
      {
        timestamps: true,
      }
);

ticketSchema.plugin(uniqueValidator,{message: 'Error, expected {PATH} is Already Exists.'});

module.exports = mongoose.model('ticket', ticketSchema);
