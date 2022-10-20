let express = require('express');

let Routes = express.Router()

let userController = require("../Controller/user")

// These routes are for my Users Table

Routes.get("/users", userController.getAllUsers)
Routes.get("/user/:userId", userController.getSingleUser)
Routes.post("/user", userController.createUser)
Routes.delete("/user/:userId", userController.deleteUser)
Routes.put("/user/:userId", userController.updateUser)

module.exports = Routes;