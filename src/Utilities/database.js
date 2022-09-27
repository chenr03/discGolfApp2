let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "chris-db1.cf4mqr0y8sdo.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "31Jumpstreet!",
    database: "hello"
});

connection.connect();


// this is async
connection.query("select now()" , function(err, rows){

    if(err){
        console.log("Connection Incorrect: You're a Moron", err);
    } else {
        console.log("Date and Time?, ", rows);
    }
});

module.exports = connection;