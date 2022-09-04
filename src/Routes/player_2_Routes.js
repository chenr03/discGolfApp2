let express = require('express');

let Routes = express.Router()

let Player_2 = require("../Players/Player_2");


Routes.get("/discs2", Player_2.getDiscBag2)
Routes.get("/discs2/:id", Player_2.getSingleDisc2);
Routes.post('/discs2', Player_2.createDisc2);
Routes.delete('/discs2/:id', Player_2.deleteDisc2);
Routes.put('/discs2/:id', Player_2.updateDisc2);




module.exports = Routes;