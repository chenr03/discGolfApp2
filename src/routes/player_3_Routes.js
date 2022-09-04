let express = require('express');

let routes = express.Router()

let Player_3 = require("../players/Player_3");


routes.get("/discs3", Player_3.getDiscBag3)
routes.get("/discs3/:id", Player_3.getSingleDisc3);
routes.post('/discs3', Player_3.createDisc3);
routes.delete('/discs3/:id', Player_3.deleteDisc3);
routes.put('/discs3/:id', Player_3.updateDisc3);




module.exports = routes;