const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "fuencore",
  password: "167635",
  database: "react_odyssey"
});
module.exports = connection;
