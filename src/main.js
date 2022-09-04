let express = require('express');

let PORT = 4040;

let discGolfApp = express();

discGolfApp.use(express.json());
discGolfApp.use(express.static("./src"));


//I will capture all the Disc Golf routes we have
// in one place, instead of defining the routes directly
// on the app object

let player_1_Routes = require("./routes/player_1_Routes.js");
discGolfApp.use(player_1_Routes);

let player_2_Routes = require("./routes/player_2_Routes.js");
discGolfApp.use(player_2_Routes);

let player_3_Routes = require("./routes/player_3_Routes");
discGolfApp.use(player_3_Routes);
// console.log(discGolfRoutes);
// console.log(player_1_DiscGolfRoutes
// console.log(player_2_DiscGolfRoutes
// console.log(player_3_DiscGolfRoutes


discGolfApp.listen(PORT, function(){
    console.log('Application started on PORT', PORT);
})




