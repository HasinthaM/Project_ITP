const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 3002;
const DB_URL = 'mongodb+srv://oshadhanipun2k1:Oshadha2001@packagecrud.8uyc1qg.mongodb.net/packageM?retryWrites=true&w=majority&appName=packageCRUD'; // Removed extra 'const DB_URL =' inside the string

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB Connected')
})
.catch((err) => console.log('DB connection error', err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});
