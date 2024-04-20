const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Import routes
const packageRoutes = require('./routers/Package/P_routes');
const userRoutes = require('./routers/Package/P_userRoutes')

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const DB_URL = 'mongodb+srv://oshadhanipun2k1:Oshadha2001@packagecrud.8uyc1qg.mongodb.net/packageM?retryWrites=true&w=majority&appName=packageCRUD';
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB Connected');
})
.catch((err) => {
    console.log('MongoDB connection error', err);
});

// Use routes
app.use('/api', packageRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
