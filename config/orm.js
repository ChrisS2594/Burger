var connection = require("../config/connection.js");

let orm = {
  all: function (tableInput, cb) {
    let q = `SELECT * FROM  ${tableInput};`;
    connection.query(q, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insert: function (name, cb) {
    let q = `INSERT INTO burgers (burger_name) VALUES ('${name}');`;
    connection.query(q, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function (id, cb) {
    let q = `UPDATE burgers SET devoured = 1 WHERE id =  ${id};`;
    connection.query(q, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}

module.exports = orm;