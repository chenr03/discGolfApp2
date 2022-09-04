let express = require('express');

let PORT = 4040;

let discGolfApp = express();

discGolfApp.use(express.json());


//I will capture all the Disc Golf routes we have
// in one place, instead of defining the routes directly
// on the app object

let discGolfRoutes = require("./routes/discGolfRoutes.js");
discGolfApp.use(discGolfRoutes);
// console.log(discGolfRoutes);


discGolfApp.listen(PORT, function(){
    console.log('Application started on PORT', PORT);
})




