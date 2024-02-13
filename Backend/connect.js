require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port1 = 5000;
const port2 = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

function handleDisconnect() {
    connection.on('error', function(err) {
        console.error('MySQL error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Reconnecting to MySQL...');
            connection.connect();
        } else {
            throw err;
        }
    });
}

connection.connect((err) => {
    if (err) {
        console.error('Failed to connect to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
    handleDisconnect();
});

// Route to fetch data from the database
app.get('/packages', (req, res) => {
    const query = "SELECT * FROM tbl_package WHERE status = '1' ORDER BY rate DESC LIMIT 12";
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

app.post('/api/confirm-booking', (req, res) => {
    const { booking_type, booked_by, total_persons, mail, mobile, pkg , state, city, rate, discount, days, nights, descr} = req.body;
    console.log("data backend me aagya h",req.body)
    const query = `INSERT INTO tbl_package_bookings (booking_type, booked_by, mobile, total_persons, mail, pkg, state, city, descr) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [booking_type, booked_by, total_persons, mail, mobile, pkg, state, city, descr];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting booking:', err);
            res.status(500).json({ success: false, message: 'Error processing booking' });
        } else {
            console.log('Booking inserted successfully');
            res.status(200).json({ success: true, message: 'Booking confirmed' });
        }
    });
});

app.listen(port1, () => {
    console.log(`Server 1 is running on port ${port1}`);
});

app.listen(port2, () => {
    console.log(`Server 2 is running on port ${port2}`);
});
