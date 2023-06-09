const express = require('express');
const cors = require('cors');
const app = express();

// Connect to MongoDB
require('./server/configs/mongoose.config');

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Routes
require('./server/routes/author.routes')(app);

// Start the server
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
