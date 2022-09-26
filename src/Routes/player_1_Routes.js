let express = require('express');

let Routes = express.Router()

let players = require("../Controller/players");
// changed controllers folder to Controller so that it makes more sense for me,
// leaving this here so that it makes more sense for others


Routes.get("/players", players.getAllPlayers)
Routes.get("/players/:id", players.getSinglePlayer);
Routes.post('/players', players.createPlayer);
Routes.delete('/players/:id', players.deletePlayer);
Routes.put('/players/:id', players.updatePlayer);




module.exports = Routes;