let express = require('express');

let PORT = 4040;

let discGolfApp = express();

discGolfApp.use(express.json());


// we have not defined this yet
// but thi will capture all the todo routes we have
// in one place, instead of defining the routes directly
// on the app object
let discGolfRoutes = require("./routes/discGolfRoutes.js");
discGolfApp.use(discGolfRoutes);
// console.log(todoRoutes);

discGolfApp.listen(PORT, function(){
    console.log('Application started on PORT', PORT);
})

