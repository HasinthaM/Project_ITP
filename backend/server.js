const express = require('express');
const app = express(); //app -express instance
const cors = require('cors');
const port = 3001;
const host = 'localhost';  // can use http://localhost also
const mongoose = require('mongoose');


const ticketRouter = require('./routers/Ticket/ticketRoute');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Sherin:123@cluster1.un9er2n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';

const connect = async () => {
     try { 
          await mongoose.connect(uri);
          console.log('Connected to MongoDB');
     }
     catch(error){
          console.log('MongoDB Error: ', error);

     }
};

connect();

//create server to run node js
const server = app.listen(port, host, () =>{
     console.log(`Node server is listening to ${server.address().port}`)
}); 


app.use('/api/ticket', ticketRouter);
