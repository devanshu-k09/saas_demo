// 🔹 1. ADD THIS AT TOP (DB connection)
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'database-1.c7kwqwcoscap.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'yourpass',
  database: 'database-1'
});

db.connect(err => {
  if (err) {
    console.log("DB error ❌");
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