let database1 = require("../Utilities/database");

let innovaBag1 = [];


//1
let getDiscBag1 =

    function(request, response){
        console.log ("GET /discs1");
        response.json(innovaBag1)
        // lets user see what's inside the innovaBag1 array

        // what kind of query do we send to get all the items in the database

    };

//2
let getSingleDisc1 =

    function(request, response){
        console.log ("GET /discs1");


        let myDiscId1 = request.params.id

        let matchingDisc1 = innovaBag1.find(function(disc1, index){
            return disc1.id === myDiscId1;
        })

        if(matchingDisc1){
            response.json(matchingDisc1)
        } else {
            response.json(undefined);
        }
    };

// what kind of query do we send to get a single item from the db if we know the id

//3
let createDisc1 =

    function(request, response){
        console.log ("POST /discs1");


        let description1 = request.body.description;
        let myDiscId1 = getRandomNum1();
        let completed1 = false;
        let color1 = request.body.color;
        let weight1 = request.body.weight;

        // read the description from the request body,
        //and create a new disc item, with the description
        // and use a random number from the id - using the math.random, and math.floor function

        let newDisc1 = {};
        newDisc1.description = description1;
        newDisc1.id = myDiscId1;
        newDisc1.completed = completed1;
        newDisc1.color = color1
        newDisc1.weight = weight1;

        // add the new disc item to the bag array

        innovaBag1.push(newDisc1);

        // return the new Disc on the response

        response.json(newDisc1);
    };

// what kind of query do we send to create an entry in the database

//4
let deleteDisc1 =

    function(request, response){
        console.log ("DELETE /discs1");


        // find the id of the disc we want to delete
        let myDiscId = request.params.id;

        // we need to remove this disc from our "Innova" Bag array
        // there are a lot of ways to do this
        // Again I am choosing to use .find, to find the disc, and then .splice to remove it from the
        //Innova Bag array

        let matchingIndex1 = innovaBag1.find(function(disc1, index){
            return disc1.id === myDiscId;
        })

        // if the index is less than 0, that means there was not a match to the id in the innova bag array
        if(matchingIndex1 < 0){
            response.json(undefined);
        } else {
            let deletedDisc1 = innovaBag1.splice(matchingIndex1, 1)
            response.json(deletedDisc1)
        }
    };

// what kind of query do we send to delete an entry in the database if we know the id

//5
let updateDisc1 =

    function(request, response){
        console.log ("PUT /discs1");


        // get the id to update from the route
        let myDiscId1 = request.params.id;

        // get the new description from the body
        let description1 = request.body.description;

        // get the new completed flag from the body
        let completed1 = request.body.completed;

        // get the new color from the body
        let color1 = request.body.color;

        let weight1 = request.body.weight;

        //we need to get the disc item we want to update from the innova bag array

        let matchingDisc1 = innovaBag1.find(function(disc1, index){
            return disc1.id == myDiscId1
        });

        // if we found a matching disc in the bag, update it
        // and return the updated item in the response
        // if not return undefined exclusively as previously explained.

        if(matchingDisc1){
            matchingDisc1.description = description1;
            matchingDisc1.completed = completed1;
            matchingDisc1.color = color1;
            matchingDisc1.weight = weight1;

            response.json(matchingDisc1);
        } else {
            response.json(undefined);
        }

    };

// what kind of query do we send to update an entry in the database if we know the id


// this function will return a random number
// between 0 and 1000
// this function comes into play with all functions, but is especially key in the delete function.

let getRandomNum1 = function(){
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 1000;
    let randomNum = Math.floor(bigRandomFloat);
    return randomNum.toString();
}

module.exports = {getDiscBag1, getSingleDisc1, createDisc1, deleteDisc1, updateDisc1};