const mysql = require("mysql2")

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "salao",
    multipleStatements: true
})
con.connect(function(err) {
  if (err) throw new Error(`erro ao connectar ao banco: ${err.message}`);
  console.log("conectado ao banco!");
});

module.exports = con