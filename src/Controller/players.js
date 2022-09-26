let database = require("../Utilities/database");
//console.log('database', database)

//- bring over database.
// let playerTable = []; //

// - taken out for the moment, as we are using the data ase and not an array

// this function takes in a request and a response object
// and returns a summary of all the player items in the response
// f the query fails for any reason, then return 500 status code.


//1
let getAllPlayers =

    function(request, response){
        console.log ("GET /players");

        // lets user see what's inside the innovaBag1 array

        // what kind of query do we send to get all the items in the database

        let sql = "select Id, firstName, lastName, gender from players";

        database.query(sql, function(err, rows){
            //console.log('im here' )
            if(err){
                console.log("list of players query failed", err)
                response.sendStatus(500); // 500 response back because it was our fault

            } else {
                response.json(rows);
            }
        });


    };

//2
/**
 * This function takes in a request and response object
 * and returns a single player based on the id that is a path parameter in the request
 *
 * if the id is not a valid id, the response will be 'null'
 * otherwise, the entire player object will be returned from the response
 *
 * /players/:id
 */

let getSinglePlayer =
    // what kind of query do we need to send
    // to get a single player from the database if we know the id

    function(request, response){
        console.log ("GET /players/:id");


        // this is bad, you should not do this...
        let id = request.params.id; // because the id is a path param

        // if id is falsy (null, undefined, NAN, '')
        if(!id) {
            response.send(400); // this is the clients fault resulting in 400 error code
            return;
        }


        // this is bad, you should not do this...
        // let sql = "select id, firstName, lastName, gender from players where id = "+id;
        // instead use parameterized sql statements

        let sql = "select id, firstName, lastName, gender from players where id = ?";
        let params = [id]

        database.query(sql, params, function(err, rows){
            if(err){
                console.log("failed to get a player from the database", err);
                response.sendStatus(500); // this is our fault if we get an error, so 500 error code
            } else {
                if(rows.length > 1){
                    console.log("returned more than 1 row for id", id);
                    response.sendStatus(500); // again this is still our fault, (500) code
                } else if (rows.length === 0){
                    response.json(null);
                } else {

                    // // grab the first row
                    // // and alter it before sending it on to the client
                    // // we are replacing the gender (0, 1) with (no, yes)
                    // let row = rows[0];
                    // if(row.gender === 1){
                    //     rows.gender = 'yes';
                    // } else {
                    //     rows.gender = 'no';
                    // }

                    response.json(rows[0]);
                }
            }
        })
    };

// what kind of query do we send to get a single item from the db if we know the id


//3

// this function accepts requests and responses
// the requests should include a json object that includes
// -- description
// -- notes
// we will create an entry in the player table inside the database, with the corresponding
//  firstName, lastName, and gender; the id will be auto generated.

// the response will do something ( either return an object or an id) ....

let createPlayer =
    // what kind of query do we send
    // to create an entry in the database

    function(request, response){
        console.log ("POST /players");


        // the colum in the table are the contract between express and the database
        let sql = "insert into players (firstName, lastName, gender) values (?, ?, ?)";
        let params = [
            request.body.firstName, // this is the contract with the client side
            request.body.lastName, // another contract with the client side
            request.body.gender // a third param with the client side

        ];

        database.query(sql, params, function(err, rows){
            if(err){
                console.log("Failed to create an item", err);
                response.sendStatus(500); // this is because there was an error on our side
            } else {
                console.log("Player created", rows);
                response.json(rows);
            }
        });


    };

// what kind of query do we send to create an entry in the database

//4

// This function takes in a request and response object
// and deletes a single player based on the id that is a path parameter in the request
//if the id is not a valid id, the response will be 'null'
//otherwise, the entire object will be deleted

///players/:id


let deletePlayer =

    function(request, response){
        console.log ("DELETE /players");


        // find the id of the player we want to delete
        let id = request.params.id;

        // we need to remove this player from our "Player Table" -  array
        // there are a lot of ways to do this
        // Again I am choosing to use .find, to find the player by ID, and then .splice to remove it from the
        //Player Table array

        let matchingIndex = playerTable.find(function(player, index){
            return player.id === id;
        })

        // if the index is less than 0, that means there was not a match to the id in the innova bag array
        if(matchingIndex < 0){
            response.json(undefined);
        } else {
            let deletedPlayer = playerTable.splice(matchingIndex, 1)
            response.json(deletedPlayer)
        }
    };

// what kind of query do we send to delete an entry in the database if we know the id

//5
let updatePlayer =

    function(request, response){
        console.log ("PUT /players");


        // get the new description from the body
        let description = request.body.description;

        // get the id to update from the route
        let id = request.params.id;

        // get the new completed flag from the body
        let completed = request.body.completed;

        // get the new color from the body
        let firstName = request.body.firstName;

        let lastName = request.body.lastName;

        //we need to get the disc item we want to update from the innova bag array

        let matchingPlayer = playerTable.find(function(players, index){
            return players.id == id
        });

        // if we found a matching disc in the bag, update it
        // and return the updated item in the response
        // if not return undefined exclusively as previously explained.

        if(matchingPlayer){
            matchingPlayer.description = description;
            matchingPlayer.id = id
            matchingPlayer.completed = completed;
            matchingPlayer.firstName = firstName;
            matchingPlayer.lastName = lastName;

            response.json(matchingPlayer);
        } else {
            response.json(undefined);
        }

    };

// what kind of query do we send to update an entry in the database if we know the id


// this function will return a random number
// between 0 and 1000
// this function comes into play with all functions, but is especially key in the delete function.

// let getRandomNum = function(){
//     let randomFloat = Math.random();
//     let bigRandomFloat = randomFloat * 1000;
//     let randomNum = Math.floor(bigRandomFloat);
//     return randomNum.toString();
// }

module.exports = {getAllPlayers, getSinglePlayer, createPlayer, deletePlayer, updatePlayer};