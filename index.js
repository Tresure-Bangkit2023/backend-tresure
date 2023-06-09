const express = require('express');

const placesRouter = require('./routes/places');
const categoryRouter = require('./routes/categories');
const userRouter = require('./routes/users');
const planRouter = require('./routes/plans');
const planPlaceRouter = require('./routes/plan_places');
const verifyToken = require('./middleware/auth');
const userLikedRouter = require('./routes/userLikedCategory');
const ratingRouter = require('./routes/ratings');
const welcomeRouter = require('./routes/welcome');

const app = express();
const port = process.env.PORT || 8080;

// Parse JSON request bodies
app.use(express.json());

app.use(express.urlencoded({extended: true}))

// Use the places router for /places routes
app.use('/places', verifyToken, placesRouter);
app.use('/categories', verifyToken, categoryRouter);
app.use('/users', userRouter);
app.use('/plans', verifyToken, planRouter);
app.use('/planplace', verifyToken, planPlaceRouter);
app.use('/userLikedCategory', verifyToken, userLikedRouter);
app.use('/ratings', verifyToken, ratingRouter);
app.use('/', welcomeRouter);


// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});