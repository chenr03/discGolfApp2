let connection = require("../Utilities/database")
// console.log(connection);

// this function takes in a request and a response object
// and returns a summary of all the users in the response
// if the query fails for any reason, then return 500 status code, as it is likely
// our fault

//1
let getAllUsers =

    function(request, response){
        console.log("GET /users")

            // lets user see what's inside the users array

            // what kind of query do we send to all the items in the database

        let sql = "SELECT userId, username, passwordHash FROM Users";
        // GETS all the users by selecting their userId, username, and passwordHash

        connection.query(sql, function(error, rows){
            //console.log('im here')
            if(error){
                console.log('The list of users query failed', error);
                response.sendStatus(500) // error on our said, our fault

            } else {
                response.json(rows); // this GETS all users in table
            }
        });
    };

//2

let getSingleUser =
    // what kind of query do we need to send
    // to get a single user from the database if we know the id

    function(request, response){
        console.log("GET /user/:userId");

        // this is bad should not do this

        let userId = request.params.id;

        if(!userId) {
            response.send(400); // this is the clients fault resulting in 400 error code.
            return;
        }


        // this is a parameterized sql statement

        let sql = 'SELECT userId, username, passwordHash from Users where userId = ?';
        let params = [userId]

        connection.query(sql, params, function(error, rows){
            if(error){
                console.log("Failed to get a user from the database", error);
                response.sendStatus(500); // this is our fault if we get an error, so 500 code
            } else {
                if(rows.length > 1){
                    console.log("returned more than 1 row for userId", userId);
                    response.sendStatus(500);
                } else if (rows.length ===0){
                    response.json(null);
                } else {
                    response.json(rows[0]);
                }
            }
        });
    };

// what kind of query do we send to get a single item from the db if we know the userId

//3

// this function accepts requests and responses
// the requests should include a json object that includes
//-- userId
//-- username
//-- passwordHash
// we will create an entry in the user Table inside the database, with the corresponding
// username, and password; user id will be auto generated, and incremented.

// the response will do something / (either return an object or an id)

let createUser =

    function(request, response){
        console.log("POST /user");

        // the column in the table are the contract between express and the database
        let sql = 'INSERT INTO Users (userId, username, passwordHash) VALUES (?, ?, ?)';
        let params = [
            request.body.userId, // this is the contract with the client side
            request.body.username, // this is the contract with the client side
            request.body.passwordHash // another contract with the client side

        ];

        connection.query(sql, params, function(error, rows){
            if(error){
                console.log("Failed to create a User", error);
                response.sendStatus(500); // this is because there will like be an error on our side
            } else {
                console.log("User created", rows); // creates a user
                response.json(rows);
            }
        });
    };

// what kind of query do we send to create an entry in the database

//4

// this function takes in a request and response object
// and deletes a single user from the database based on the userId that is a path parameter in the request
// if the id is not a valid id, the response will be null
// otherwise, the entire object will be deleted

// user/:id

// what kind of query do we send to delete an entry in the database if we know the userId
// what kind of query is it?

let deleteUser =

    function(request, response) {
        console.log("DELETE /user/:UserId")

        let userId = request.params.userId; // because the userId is a path parameter
        let sql = 'DELETE FROM Users WHERE userId = ?'
        let params = [userId];

        console.log("request.body", request.body);

        connection.query(sql, params, function(error, rows){
            if(error){
                console.log("Failed to Delete User", error)
                response.sendStatus(500);
            } else {
                console.log("User Deleted", rows);
                response.json(rows);
            }
        });
    };

// which query type do we need to do to update a user?

let updateUser =

    function(request, response){
        console.log("PUT / user/:userId")


        // this column in the table is the contract between express and the database
        let userId = request.params.userId; // coming from the path parameter
        if(!userId){
            response.sendStatus(400)
            return;
        }
            let sql = 'UPDATE Users SET userId = ?, username = ?, passwordHash = ?';
            let params = [request.body.userId, request.body.username, request.body.passwordhash]



        connection.query(sql, params, function(error, rows){
            if(error){
                console.log("Failed to Update User", error);
                response.sendStatus(500); // this is because there was an error on our side
            } else {
                console.log("User Updated", rows);
                response.sendStatus(200); // successful
            }
        });
    };

module.exports = {getAllUsers, getSingleUser, createUser, deleteUser, updateUser};