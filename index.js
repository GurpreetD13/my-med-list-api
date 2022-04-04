const express = require('express');
const app = express();
const cors = require('cors');


// Middleware:

// - will need the following bodyParser to access/parse request.body of POST requests
app.use(express.json());

// - will need to allow cross origin resource sharing
app.use(cors());

// Authorization
const authorize = require('./middleware/authorize');



// Routes
const dinSearchRoutes = require('./routes/dinSearchRoute');
const usersRoutes = require('./routes/usersRoute');
const medicationsRoutes = require('./routes/medicationsRoute');

app.use('/drug-identification-search', dinSearchRoutes);
app.use('/users', usersRoutes);
app.use('/medications', medicationsRoutes); // add authorize HERE



// server Listening for requests on port 8080
app.listen(8080, () => { console.log('My Med List server is running on http://localhost:8080') });