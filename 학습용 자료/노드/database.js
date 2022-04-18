const mysql = require("mysql2/promise");

exports.pool = mysql.createPool({
  host: "www.seongong.shop",
  user: "outer",
  port: "3306",
  password: "111111",
  database: "MyTodoDB",
});
