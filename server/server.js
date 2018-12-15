// Base imports
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

// Body parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Static files
app.use(express.static('build'));

// Route includes
const initialRouter = require('./routes/initial.router.js');

// Routes
app.use('/initial', initialRouter);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});