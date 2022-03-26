const express = require('express');
const app = express();
const cors = require('cors');


// Middleware:

// - will need the following bodyParser to access/parse request.body of POST requests
// app.use(express.json());

// - will need to allow cross origin resource sharing
// app.use(cors());






// Routes











// server Listening for requests on port 8080
app.listen(8080, () => { console.log('My Med List server is running on port: 8080') });