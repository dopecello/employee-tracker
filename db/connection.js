const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password1234",
    database: "emptrack",
  },
  console.log("Connected to the Employee Tracking database.")
);

module.exports = db;
