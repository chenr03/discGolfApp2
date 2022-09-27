let express = require('express');

let Routes = express.Router()

let controller = require("../Controller/players");



Routes.get("/players", controller.getAllPlayers)
Routes.get("/players/:id", controller.getSinglePlayer);
Routes.post('/players', controller.createPlayer);
Routes.delete('/players/:id', controller.deletePlayer);
Routes.put('/players/:id, /players/:firstName, /players/:lastName, /players/:gender', controller.updatePlayer);




module.exports = Routes;