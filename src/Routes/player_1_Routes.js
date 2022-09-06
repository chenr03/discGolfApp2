let express = require('express');

let Routes = express.Router()

let Player_1 = require("../Players/Player_1");
// changed controllers folder to Players so that it makes more sense for me,
// leaving this here so that it makes more sense for others


Routes.get("/discs1", Player_1.getDiscBag1)
Routes.get("/discs1/:id", Player_1.getSingleDisc1);
Routes.post('/discs1', Player_1.createDisc1);
Routes.delete('/discs1/:id', Player_1.deleteDisc1);
Routes.put('/discs1/:id', Player_1.updateDisc1);




module.exports = Routes;