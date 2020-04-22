const mysql = require("mysql");
let connection;


if (process.env.BurgerDB_URL) {
  connection = mysql.createConnection(process.env.BurgerDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ilBS43v3r!",
    database: "burger_db"
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;