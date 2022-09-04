let express = require('express');

let routes = express.Router()

let controller = require("../controllers/discGolfControllers");

routes.get("/discs/:id", controller.getSingleDisc);
routes.put('/discs/:id', controller.updateDisc);
routes.delete('/discs/:id', controller.deleteDisc);
routes.post('/discs', controller.createDisc);
routes.get("/discs", controller.getDiscBag)

module.exports = routes;