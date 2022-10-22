let express = require('express');

let Routes = express.Router();

let controller = require("../Controller/players");

// These routes are for my Players Table
Routes.get("/players", controller.getAllPlayers)
Routes.get("/player/:playerId", controller.getSinglePlayer);
Routes.post('/player', controller.createPlayer);
Routes.delete('/player/:playerId', controller.deletePlayer);
Routes.put('/player/:playerId', controller.updatePlayer);

module.exports = Routes;



