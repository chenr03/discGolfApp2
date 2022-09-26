let database = require("../Utilities/database");

let playerTable = [];


//1
let getAllPlayers =

    function(request, response){
        console.log ("GET /players");

        // lets user see what's inside the innovaBag1 array

        // what kind of query do we send to get all the items in the database

        let sql = "SELECT Id descriptions FROM players";

        database.query(sql, function(err, rows){
            if(err){

            } else {
                response.json(playerTable)
            }
        });


    };

//2
let getSinglePlayer =

    function(request, response){
        console.log ("GET /players/:id");


        let myPlayerId = request.params.id

        let matchingPlayer = playerTable.find(function(player, index){
            return player.id === myPlayerId;
        })

        if(matchingPlayer){
            response.json(matchingPlayer)
        } else {
            response.json(undefined);
        }
    };

// what kind of query do we send to get a single item from the db if we know the id


//3
let createPlayer =

    function(request, response){
        console.log ("POST /players");


        let description = request.body.description;
        let playersId = getRandomNum();
        let firstName = request.body.firstName;
        let lastName = request.body.lastName;
        let completed = false;

        // read the description from the request body,
        //and create a new player, with the description
        // and use a random number from the id - using the math.random, and math.floor function

        let players= {};
        players.description = description;
        players.id = playersId;
        players.firstName= firstName ;
        players.lastName = lastName
        players.completed = completed;

        // add the new player to the player table
        // using the correct Values listed above when using the INSERT query
        // INSERT players into player table.

        playerTable.push(players);

        // return the new player on the response

        response.json(players);
    };

// what kind of query do we send to create an entry in the database

//4
let deletePlayer =

    function(request, response){
        console.log ("DELETE /players");


        // find the id of the player we want to delete
        let myPlayerId = request.params.id;

        // we need to remove this player from our "Player Table" -  array
        // there are a lot of ways to do this
        // Again I am choosing to use .find, to find the player by ID, and then .splice to remove it from the
        //Player Table array

        let matchingIndex = playerTable.find(function(player, index){
            return player.id === myPlayerId;
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
        let myPlayerId = request.params.id;

        // get the new completed flag from the body
        let completed = request.body.completed;

        // get the new color from the body
        let firstName = request.body.firstName;

        let lastName = request.body.lastName;

        //we need to get the disc item we want to update from the innova bag array

        let matchingPlayer = playerTable.find(function(players, index){
            return players.id == myPlayerId
        });

        // if we found a matching disc in the bag, update it
        // and return the updated item in the response
        // if not return undefined exclusively as previously explained.

        if(matchingPlayer){
            matchingPlayer.description = description;
            matchingPlayer.Id = myPlayerId
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

let getRandomNum = function(){
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 1000;
    let randomNum = Math.floor(bigRandomFloat);
    return randomNum.toString();
}

module.exports = {getAllPlayers, getSinglePlayer, createPlayer, deletePlayer, updatePlayer};