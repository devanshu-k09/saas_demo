// 🔹 1. ADD THIS AT TOP (DB connection)
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'database-1.c7kwqwcoscap.ap-south-1.rds.amazonaws.com', // your endpoint
  user: 'admin',
  password: 'yourpass', // the one you set in RDS
  database: 'mysql',         // use 'mysql' for now
  connectTimeout: 10000
});

db.connect(err => {
  if (err) {
    console.log("DB error ❌");
    console.log(err);        // 👈 this line is key
  } else {
    console.log("DB connected ✅");
  }
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from AWS 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});