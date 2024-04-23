const mongoose = require("mongoose");

const uniqueValidator = require('mongoose-unique-validator');

const salarySchema = new mongoose.Schema(
    {
      s_id: {
        type: String,
        unique: true,
        required: true
        },
      name: {
        type: String,
        required: true
      },
        basicSalary: {
          type: String,
          required: true
        },
        attendance: {
          type: String,
          required: true
        },

        allowance: {
          type: String,
          required: true
        },
        epf: {
          type: String,
          required: true
        },
        etf: {
          type: String,
          required: true
        },
        tax: {
          type: String,
          required: true
        },
        netSalary: {
          type: String,
          required: true

      }
    },
      {
        timestamps: true,
      }
);

salarySchema.plugin(uniqueValidator,{message: 'Error, expected {PATH} is Already Exists.'});

module.exports = mongoose.model('salary', salarySchema);
