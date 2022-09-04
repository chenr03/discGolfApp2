let express = require('express');

let routes = express.Router()

let Player_2 = require("../players/Player_2");


routes.get("/discs", Player_2.getDiscBag2)
routes.get("/discs/:id", Player_2.getSingleDisc2);
routes.post('/discs', Player_2.createDisc2);
routes.delete('/discs/:id', Player_2.deleteDisc2);
routes.put('/discs/:id', Player_2.updateDisc2);




module.exports = routes;