let express = require('express');

let Routes = express.Router()

let Player_3 = require("../Players/Player_3");


Routes.get("/discs3", Player_3.getDiscBag3)
Routes.get("/discs3/:id", Player_3.getSingleDisc3);
Routes.post('/discs3', Player_3.createDisc3);
Routes.delete('/discs3/:id', Player_3.deleteDisc3);
Routes.put('/discs3/:id', Player_3.updateDisc3);




module.exports = Routes;