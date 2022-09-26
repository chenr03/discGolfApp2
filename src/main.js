let express = require('express');

let PORT = 8080;

let discGolfApp = express();

discGolfApp.use(express.json());
discGolfApp.use(express.static("./discGolfApp2/src"));


// I will capture all the Disc Golf Routes we have
// in one place, instead of defining the Routes directly
// on the app object

let player_1_Routes = require("./Routes/player_1_Routes.js");
discGolfApp.use(player_1_Routes);

// console.log(player_1_Routes)


discGolfApp.listen(PORT, function(){
    console.log('Application started on PORT', PORT);
})




