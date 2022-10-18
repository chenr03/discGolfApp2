let express = require('express');

let Routes = express.Router()

let courseController = require("../Controller/course")

// These routes are for my Courses Table

Routes.get("/course", courseController.getAllCourses)
Routes.get("/course", courseController.getSingleCourse)
Routes.post("/course", courseController.createCourse)
Routes.delete("/course", courseController.deleteCourse)
Routes.put("/course", courseController.updateCourse)


module.exports = Routes;
