const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
const database = require('./config/database');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(userRoutes);
app.use(authRoutes);

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Handle error responses
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect to the database
database
    .sync()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });