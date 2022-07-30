const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "abc123",
  database: "harshit_schema",
});

app.post("/insert", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;

  db.query(
    "INSERT INTO formdata (firstName, lastName, phoneNumber) VALUES (?,?,?)",
    [firstName, lastName, phoneNumber],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/data", (req, res) => {
  db.query("SELECT * FROM formdata", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});