var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
 var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
     console.log(result); 
    console.log("Table deleted");
  });
});