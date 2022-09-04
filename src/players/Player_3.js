let innovaBag3 = [];

//1
let getDiscBag3 =

    function(request, response){
        console.log ("GET /discs3");
        response.json("from GET /discs3")

    };

//2
let getSingleDisc3 =

    function(request, response){
        console.log ("GET /discs3");


        let myDiscId3 = request.params.id

        let matchingDisc3 = innovaBag3.find(function(disc, index){
            return disc.id === myDiscId3;
        })

        if(matchingDisc3){
            response.json(matchingDisc3)
        } else {
            response.json(undefined);
        }
    };

//3
let createDisc3 =

    function(request, response){
        console.log ("POST /discs3");


        let description3 = request.body.description;
        let myDiscId3 = getRandomNum();
        let completed3 = false;

        // read the description from the request body,
        //and create a new disc item, with the description
        // and use a random number from the id - using the math.random, and math.floor function

        let newDisc3 = {};
        newDisc3.description = description3;
        newDisc3.id = myDiscId3;
        newDisc3.completed = completed3;

        // add the new disc item to the bag array

        innovaBag3.push(newDisc3);

        // return the new Disc on the response

        response.json(newDisc3);
    };

//4
let deleteDisc3 =

    function(request, response){
        console.log ("DELETE /discs3");


        // find the id of the disc we want to delete
        let myDiscId3 = request.params.id;

        // we need to remove this disc from our "Innova" Bag array
        // there are a lot of ways to do this
        // Again I am choosing to use .find, to find the disc, and then .splice to remove it from the
        //Innova Bag array

        let matchingIndex3 = innovaBag3.find(function(disc3, index){
            return disc3.id === myDiscId3;
        })

        // if the index is less than 0, that means there was not a match to the id in the innova bag array
        if(matchingIndex3 < 0){
            response.json(undefined);
        } else {
            let deletedDisc3 = innovaBag3.splice(matchingIndex3, 1)
            response.json(deletedDisc3)
        }
    };

//5
let updateDisc3 =

    function(request, response){
        console.log ("PUT /discs3");


        // get the id to update from the route
        let myDiscId3 = request.params.id;

        // get the new description from the body
        let description3 = request.body.description;

        // get the new completed flag from the body
        let completed3 = request.body.completed;

        //we need to get the disc item we want to update from the innova bag array

        let matchingDisc3 = innovaBag3.find(function(disc3, index){
            return disc3.id == myDiscId3
        });

        // if we found a matching disc in the bag, update it
        // and return the updated item in the response
        // if not return undefined exclusively as previously explained.

        if(matchingDisc3){
            matchingDisc3.description = description3;
            matchingDisc3.completed = completed3;
            response.json(matchingDisc3);
        } else {
            response.json(undefined);
        }

    };


// this function will return a random number
// between 0 and 1000
// this function comes into play with all functions, but is especially key in the delete function.

let getRandomNum = function(){
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 1000;
    let randomNum = Math.floor(bigRandomFloat);
    return randomNum.toString();
}

module.exports = {getDiscBag3, getSingleDisc3, createDisc3, deleteDisc3, updateDisc3};