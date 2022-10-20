
let express = require('express');

let Routes = express.Router()


let gameController = require("../Controller/game")

// These routes are for my Game Table

Routes.get("/games", gameController.getAllGames)
Routes.get("/game/:gameId", gameController.getSingleGame)
Routes.post("/game", gameController.createGame)
Routes.delete("/game/:gameId", gameController.deleteGame)
Routes.put("/game/:gameId", gameController.updateGame)


module.exports = Routes;