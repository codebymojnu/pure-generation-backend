const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute');
const giftDataRoute = require('./routes/giftDataRoute');
const memberRoute = require('./routes/memberRoute');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', authRoute);
app.use('/giftdata', giftDataRoute);
app.use('/members', memberRoute);

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
