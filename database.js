var mysql = require("mysql2");

var hostname = "t32.h.filess.io";
var database = "Interstellarjams_timesoonif";
var port = "3307";
var username = "Interstellarjams_timesoonif";
var password = "ac67029e7f39d25d3d2add03528516d9c5a448d2";

var connection = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

module.exports = connection;
