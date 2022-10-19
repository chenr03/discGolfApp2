const express = require("express");

require("dotenv").config();

const app = express();
let port = process.env.PORT || 8080;
let host = process.env.MYSQL_HOST

app.use("/success", function(request, response){
    response.send("Deployed Successfully" +host)
});


app.listen(port, function(){
    console.log('App running on Port', port);
})
