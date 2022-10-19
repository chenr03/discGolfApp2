let connection = require("../Utilities/database");


//1
let getAllCourses =

    function(request, response){
        console.log("GET /courses")

        // lets user see what's inside the courses table

        // what kind of query do we send to get all the courses in the database

        let sql = "SELECT courseId, courseName, Hole1Score, Hole2Score, Hole3Score, Hole4Score, Hole5Score, Hole6Score, Hole7Score, Hole8Score, Hole9 Score, Hole10Score, Hole11Score, Hole12Score, Hole13Score, Hole14Score, Hole15Score, Hole16Score, Hole17Score, Hole18Score FROM Courses";

            // GETS all courses by selecting courseId,
            // courseName, Hole1Score, Hole 2 Score, etc.

        connection.query(sql, function(error, rows){
            //console.log('bilbo')
            if(error){
                console.log("List of courses failed", error)
                response.sendStatus(500); // our fault

            } else {
                response.json(rows); // this GETS all course from table
            }
        });

    };

//2
let getSingleCourse =

    function(request, response){
        console.log("GET /courses/:courseId");

        let courseId = request.params.courseId;

        // if courseId is falsy
        if(!courseId) {
            response.send(400); // clients fault
            return;
        }

        let sql = "SELECT courseId, courseName, Hole1Score, Hole2Score, Hole3Score, Hole4Score, Hole5Score, Hole6Score, Hole7Score, Hole8Score, Hole9 Score, Hole10Score, Hole11Score, Hole12Score, Hole13Score, Hole14Score, Hole15Score, Hole16Score, Hole17Score, Hole18Score FROM Courses where courseId =?";

        let params = [courseId]

        connection.query(sql, params, function(error, rows){
            if(error){
                console.log("Failed to get a course from the database", error);
                response.sendStatus(500); // our fault
            } else {
                if(rows.length > 1){
                    console.log("Returned more than 1 row for courseId", courseId);
                    response.sendStatus(500); // again this is still our fault
                } else if (rows.length === 0){
                    response.json(null);
                } else {
                    response.json(rows[0])
                }
            }
        });
    };



//3
let createCourse =

    function(request, response){
        console.log("POST /courses");


        //these columns in the table is the contract between express and the database
        let sql = "INSERT INTO Courses courseId, courseName, Hole1Score, Hole2Score, Hole3Score, Hole4Score, Hole5Score, Hole6Score, Hole7Score, Hole8Score, Hole9 Score, Hole10Score, Hole11Score, Hole12Score, Hole13Score, Hole14Score, Hole15Score, Hole16Score, Hole17Score, Hole18Score VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"; //inserts into courses object table
        let params = [
            request.body.courseId,
            request.body.courseName,
            request.body.Hole1Score,
            request.body.Hole2Score,
            request.body.Hole3Score,
            request.body.Hole4Score,
            request.body.Hole5Score,
            request.body.Hole6Score,
            request.body.Hole7Score,
            request.body.Hole8Score,
            request.body.Hole9Score,
            request.body.Hole10Score,
            request.body.Hole11Score,
            request.body.Hole12Score,
            request.body.Hole13Score,
            request.body.Hole14Score,
            request.body.Hole15Score,
            request.body.Hole16Score,
            request.body.Hole17Score,
            request.body.Hole18Score
        ];

        connection.query(sql, params, function(error, rows){
            if(error){
                console.log("Failed to create a course", rows);
                response.sendStatus(500); // our fault
            } else {
                console.log("Course Created Successfully", rows); // created a course in the database
                response.json(rows);
            }
        });
    };


//4
let deleteCourse =

    function(request, response){
        console.log("DELETE /courses/:courseId");

        let courseId = request.params.courseId; // because the courseId is a path param
        let sql = "DELETE FROM Courses WHERE courseId = ?"
        let params = [courseId];

        console.log("request.body", request.body);

        connection.query(sql, params, function(error, rows){
            if(error){
                console.log("Failed to Delete Course", error);
                response.sendStatus(500); // our fault on server side
            } else {
                console.log("Course Deleted", rows)
                response.json(rows);
            }
        });

    };


//5
let updateCourse =

    function(request, response){
        console.log("PUT /courses/:courseId");

        //these columns in the table is the contract between express and the database
        let courseId = request.params.courseId; // coming from the path parameter
        if(!courseId) {
            response.sendStatus(400); // client error.
            return;
        }

        let sql = "UPDATE Courses SET courseId = ?, courseName = ?, Hole1Score = ?, Hole2Score = ?, Hole3Score = ?, Hole4Score = ?, Hole5Score = ?, Hole6Score = ?, Hole7Score = ?, Hole8Score = ?, Hole9Score = ?, Hole10Score = ?, Hole11Score = ?, Hole12Score = ?, Hole13Score = ?, Hole14Score = ?, Hole15Score = ?, Hole16Score = ?, Hole17Score = ?, Hole18Score = ? WHERE courseId = ?";
        let params = [
            request.body.courseId,
            request.body.courseName,
            request.body.Hole1Score,
            request.body.Hole2Score,
            request.body.Hole3Score,
            request.body.Hole4Score,
            request.body.Hole5Score,
            request.body.Hole6Score,
            request.body.Hole7Score,
            request.body.Hole8Score,
            request.body.Hole9Score,
            request.body.Hole10Score,
            request.body.Hole11Score,
            request.body.Hole12Score,
            request.body.Hole13Score,
            request.body.Hole14Score,
            request.body.Hole15Score,
            request.body.Hole16Score,
            request.body.Hole17Score,
            request.body.Hole18Score
        ];

        connection.query(sql, params, function(error, rows){
            if(error){
                console.log("Failed to Update Course", error);
                response.sendStatus(500); // this is because there was an error on our side
            } else {
                console.log("Course Updated Successfully", rows);
                response.sendStatus(200); // sent successfully
            }
        });
    };



module.exports = {getAllCourses, getSingleCourse, createCourse, deleteCourse, updateCourse};