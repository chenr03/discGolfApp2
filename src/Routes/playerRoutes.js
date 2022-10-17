let express = require('express');

let Routes = express.Router()

let controller = require("../Controller/players");



// These routes are for my Users Table








// These routes are for my Game Table







// These routes are for my Players Table
Routes.get("/players", controller.getAllPlayers)
Routes.get("/players/:id", controller.getSinglePlayer);
Routes.post('/players', controller.createPlayer);
Routes.delete('/players/:id', controller.deletePlayer);
Routes.put('/players/:id', controller.updatePlayer);

module.exports = Routes;
// These routes are for my Courses Table



