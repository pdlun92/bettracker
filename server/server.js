const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "shilale45-db.c9cuq70xxmoo.us-east-1.rds.amazonaws.com",
  user: "bettracker",
  password: "brigdog420sick",
  database: "shilale45"
});
connection.connect();

const app = express();
const port = 3050;

app.use(bodyParser.json());
app.use(cors());

app.post("/bets", (req, res) => {
  console.log(req.body);

  const { bettor_id } = req.body;

  if (bettor_id) {
    connection.query(
      `SELECT * FROM bets WHERE bettor_id = ${bettor_id}`,
      function(error, results) {
        if (error) throw error;
        console.log("Found bets ", results);
        res.status(200).send(results);
        return;
      }
    );
  } else {
    console.error("empty bettor_id");
    res.status(400).send(`empty bettor_id`);
    return;
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
