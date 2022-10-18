let express = require('express');

let Routes = express.Router()

let userController = require("../Controller/users")

// These routes are for my Users Table

Routes.get("/users", userController.getAllUsers)
Routes.get("/users", userController.getSingleUser)
Routes.post("/users", userController.createUser)
Routes.delete("/users", userController.deleteUser)
Routes.put("/users", userController.updateUser)

module.exports = Routes;