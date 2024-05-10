const express = require('express');
// In orderformRoute.js
const Order = require('../model/OrderForm/orderformModel');


// Create a new router object to handle routes
const router = express.Router();

// POST route for creating a new order
router.post("/", async (request, response, next) => {
    try {
      // Check if all required fields are present in the request body
      if (
        !request.body.customername ||
        !request.body.phone ||
        !request.body.email ||
        !request.body. billingaddress 
        
        

      ) {
        return response.status(400).send({
          message: "send all required fields: customername, phone, email, billingaddress",
        });
      }

      const newOrder = {
        customername: request.body.customername,
        phone: request.body.phone,
        email: request.body.email,
        billingaddress: request.body.billingaddress,
        
        
      };
  
      const order = await Order.create(newOrder);
  
      return response.status(201).send(order);
    } catch (error) {
      console.log(error.message);
      return response.status(500).send({ message: error.message });
    }
    
  });


  // Export the router to be used in other parts of the application
module.exports = router;