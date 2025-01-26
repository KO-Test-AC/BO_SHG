const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');  // Add this line

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());  // Allow requests from any origin

// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Your MySQL password
    database: 'my_database'  // Your MySQL database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// API route to fetch data from the users table
app.get('/data', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
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
