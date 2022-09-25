let database2 = require("../Utilities/database");

let innovaBag2 = [];

//1
let getDiscBag2 =

    function(request, response){
        console.log ("GET /discs2");
        response.json(innovaBag2)
        //pulling array into body for user

    };

//2
let getSingleDisc2 =

    function(request, response){
        console.log ("GET /discs2");


        let myDiscId2 = request.params.id

        let matchingDisc2 = innovaBag2.find(function(disc2, index){
            return disc2.id === myDiscId2;
        })

        if(matchingDisc2){
            response.json(matchingDisc2)
        } else {
            response.json(undefined);
        }
    };

//3
let createDisc2 =

    function(request, response){
        console.log ("POST /discs2");


        let description2 = request.body.description;
        let myDiscId2 = getRandomNum2();
        let completed2 = false;
        let color2 = request.body.color;
        let weight2 = request.body.weight;

        // read the description from the request body,
        //and create a new disc item, with the description
        // and use a random number from the id - using the math.random, and math.floor function

        let newDisc2 = {};
        newDisc2.description = description2;
        newDisc2.id = myDiscId2;
        newDisc2.completed = completed2;
        newDisc2.color = color2;
        newDisc2.weight = weight2;

        // add the new disc item to the bag array

        innovaBag2.push(newDisc2);

        // return the new Disc on the response

        response.json(newDisc2);
    };

//4
let deleteDisc2 =

    function(request, response){
        console.log ("DELETE /discs2");


        // find the id of the disc we want to delete
        let myDiscId2 = request.params.id;

        // we need to remove this disc from our "Innova" Bag array
        // there are a lot of ways to do this
        // Again I am choosing to use .find, to find the disc, and then .splice to remove it from the
        //Innova Bag array

        let matchingIndex2 = innovaBag2.find(function(disc2, index){
            return disc2.id == myDiscId2;
        })

        // if the index is less than 0, that means there was not a match to the id in the innova bag array
        if(matchingIndex2 < 0){
            response.json(undefined);
        } else {
            let deletedDisc2 = innovaBag2.splice(matchingIndex2, 1)
            response.json(deletedDisc2)
        }
    };

//5
let updateDisc2 =

    function(request, response){
        console.log ("PUT /discs2");


        // get the id to update from the route
        let myDiscId2 = request.params.id;

        // get the new description from the body
        let description2 = request.body.description;

        // get the new completed flag from the body
        let completed2 = request.body.completed;

        // get the new color from the body
        let color2 = request.body.color;

        // get the new weight from the body
        let weight2 = request.body.weight;

        //we need to get the disc item we want to update from the innova bag array

        let matchingDisc2 = innovaBag2.find(function(disc2, index){
            return disc2.id == myDiscId2
        });

        // if we found a matching disc in the bag, update it
        // and return the updated item in the response
        // if not return undefined exclusively as previously explained.

        if(matchingDisc2){
            matchingDisc2.description = description2;
            matchingDisc2.completed = completed2;
            matchingDisc2.color = color2;
            matchingDisc2.weight = weight2;

            response.json(matchingDisc2);
        } else {
            response.json(undefined);
        }

    };

// this function will return a random number
// between 0 and 1000
// this function comes into play with all functions, but is especially key in the delete function.

let getRandomNum2 = function(){
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 1000;
    let randomNum = Math.floor(bigRandomFloat);
    return randomNum.toString();
};

module.exports = {getDiscBag2, getSingleDisc2, createDisc2, deleteDisc2, updateDisc2};