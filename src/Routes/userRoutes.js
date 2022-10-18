let express = require('express');

let Routes = express.Router()

let userController = require("../Controller/user")

// These routes are for my Users Table

Routes.get("/user", userController.getAllUsers)
Routes.get("/user", userController.getSingleUser)
Routes.post("/user", userController.createUser)
Routes.delete("/user", userController.deleteUser)
Routes.put("/user", userController.updateUser)

module.exports = Routes;