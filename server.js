const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');  // Import cors

const app = express();
const port = 3000;

// Use CORS to allow requests from any origin
app.use(cors());

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',  // Your MySQL server address
    user: 'root',       // Your MySQL username
    password: 'KENYAkelvin@28*',       // Your MySQL password
    database: 'bo_database'  // Your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Root route (optional)
app.get('/', (req, res) => {
    res.send('Hello, welcome to the MySQL API!');
});

// API route to fetch data from the users table
app.get('/data', (req, res) => {
    db.query('SELECT * FROM boshg_main', (err, result) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).send('Database query failed');
            return;
        }
        res.json(result);  // Send the result as JSON
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
