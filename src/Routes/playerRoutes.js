let express = require('express');

let Routes = express.Router()

let controller = require("../Controller/players");
// changed controllers folder to Controller so that it makes more sense for me,
// leaving this here so that it makes more sense for others


Routes.get("/players", controller.getAllPlayers)
Routes.get("/players/:id", controller.getSinglePlayer);
Routes.post('/players', controller.createPlayer);
Routes.delete('/players/:id', controller.deletePlayer);
Routes.put('/players/:id', controller.updatePlayer);




module.exports = Routes;