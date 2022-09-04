let express = require('express');

let routes = express.Router()

let Player_1 = require("../players/Player_1");


routes.get("/discs", Player_1.getDiscBag1)
routes.get("/discs/:id", Player_1.getSingleDisc1);
routes.post('/discs', Player_1.createDisc1);
routes.delete('/discs/:id', Player_1.deleteDisc1);
routes.put('/discs/:id', Player_1.updateDisc1);




module.exports = routes;