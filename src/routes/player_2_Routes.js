let express = require('express');

let routes = express.Router()

let Player_2 = require("../Players/Player_2");


routes.get("/discs2", Player_2.getDiscBag2)
routes.get("/discs2/:id", Player_2.getSingleDisc2);
routes.post('/discs2', Player_2.createDisc2);
routes.delete('/discs2/:id', Player_2.deleteDisc2);
routes.put('/discs2/:id', Player_2.updateDisc2);




module.exports = routes;