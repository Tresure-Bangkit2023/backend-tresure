const express = require('express');
const placesRouter = require('./routes/places');
const categoryRouter = require('./routes/categories');

const app = express();
const port = 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Parse JSON request bodies
app.use(express.json());

app.use((req, res, next) => {
    req.prisma = prisma;
    next();
});

// Use the places router for /places routes
app.use('/places', placesRouter);
app.use('/categories', categoryRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

