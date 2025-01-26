const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create a MySQL connection using mysql2
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'KENYAkelvin@28*',
  database: 'bo_database'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

// API endpoint to fetch data from MySQL
app.get('/data', (req, res) => {
  db.query('SELECT * FROM boshg_main', (err, result) => {
    if (err) throw err;
    res.json(result);  // Return the result as JSON
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
