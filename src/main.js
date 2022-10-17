let express = require('express');

require("dotenv").config();

let PORT = process.env.PORT || 8080;

let discGolfApp = express();

discGolfApp.use(express.json());
discGolfApp.use(express.static("./discGolfApp2/public"));

let authRoutes = require("./routes/authorizationRoutes")

// app.use(loginRoutes)


// I will capture all the Disc Golf Routes we have
// in one place, instead of defining the Routes directly
// on the app object

let playerRoutes = require("./Routes/playerRoutes.js");
discGolfApp.use(playerRoutes);

// only for users table and login

// console.log(player_1_Routes)


discGolfApp.listen(PORT, function(){
    console.log('Application started on PORT', PORT);
})




