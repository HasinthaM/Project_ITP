const express = require('express');
const app = express();
const cors = require('cors');
const port = 7000;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./routers/Booking/bookingRoute.js');
const eventRouter = require('./routers/Event/eventRoute.js');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://janinduchamod200125:123@booking.ltw0u23.mongodb.net/Booking?retryWrites=true&w=majority&appName=Booking';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB Error: ', error);
    }
}

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use("/api", router);
app.use("/api", eventRouter);