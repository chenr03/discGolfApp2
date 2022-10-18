
let express = require('express');

let Routes = express.Router()


let gameController = require("../Controller/game")

// These routes are for my Game Table

Routes.get("/game", gameController.getAllGames)
Routes.get("/game", gameController.getSingleGame)
Routes.post("/game", gameController.createGame)
Routes.delete("/game", gameController.deleteGame)
Routes.put("/game", gameController.updateGame)


module.exports = Routes;