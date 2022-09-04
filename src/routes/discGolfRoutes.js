let express = require('express');

let routes = express.Router()

let controller = require("../controllers/discGolfControllers");


routes.get("/discs", controller.getDiscBag)
routes.get("/discs/:id", controller.getSingleDisc);
routes.post('/discs', controller.createDisc);
routes.delete('/discs/:id', controller.deleteDisc);
routes.put('/discs/:id', controller.updateDisc);




module.exports = routes;