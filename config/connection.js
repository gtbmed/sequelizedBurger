//Dependencies
const mysql = require('mysql');
const dbPassword = require('../config/dbpword.js');

const newPassword = dbPassword;
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: newPassword,
  database: "burgers_db"
});

// Connect to DB
connection.connect(function(error) {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection for use by other files
module.exports = connection;
