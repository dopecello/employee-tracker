const express = require("express");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//SQL stuff
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password1234",
    database: "emptrack",
  },
  console.log("Connected to the Employee Tracking database.")
);

//Test connection
app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Tracking employees on port ${PORT}`);
});
