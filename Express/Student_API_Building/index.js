// Importing required packages
const express = require('express');
const cors = require('cors');

// Importing routes and database connection function
const studentRoutes = require('./routes/Student.routes');
const connectDB = require('./config/db');

// Connecting to MongoDB database
connectDB(); 
// If database connection fails, the server won't start properly.


const app = express();

/*  
===================================
           MIDDLEWARES
===================================
*/
// This middleware allows Express to understand incoming JSON data
app.use(express.json());
// This middleware allows Express to read URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// CORS (Cross-Origin Resource Sharing) setup
// Allows frontend apps running on other ports (like React/Vite) to access this backend
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],  
    // Allowed frontend origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  
    // Allowed headers in requests
    credentials: true,  
    // Allows cookies or tokens if needed
}));


/*  
===================================
           ROUTES
===================================
*/

// All student-related routes will start with: /api/students/
app.use('/api/students', studentRoutes);


// Simple test route
// Visiting http://localhost:PORT/ will show "Hello World"
app.get('/', (req, res) => {
    res.send('Student API Running...');
});


/*  
===================================
           START SERVER
===================================
*/

// Starting the server using environment variables
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running at ${process.env.SERVER_URL}:${process.env.SERVER_PORT}`);
});
