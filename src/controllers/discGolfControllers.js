const innovaBag = [];

//1
let getDiscBag =

    function(request, response){
        console.log ("GET /discs");
        response.json("from GET /discs")

    };

//2
let getSingleDisc =

    function(request, response){
        console.log ("GET /discs");


        let myDiscId = request.params.id

        let matchingDisc = innovaBag.find(function(disc, index){
            return disc.id === myDiscId;
        })

        if(matchingDisc){
            response.json(matchingDisc)
        } else {
            response.json(undefined);
        }
    };

//3
let createDisc =

    function(request, response){
        console.log ("POST /discs");


        let description = request.body.description;
        let myDiscId = getRandomNum();
        let completed = false;

        // read the description from the request body,
        //and create a new disc item, with the description
        // and use a random number from the id - using the math.random, and math.floor function

        let newDisc = {};
        newDisc.description = description;
        newDisc.id = myDiscId;
        newDisc.completed = completed;

        // add the new disc item to the bag array

        innovaBag.push(newDisc);

        // return the new Disc on the response

        response.json(newDisc);
    };

//4
let deleteDisc =

    function(request, response){
        console.log ("DELETE /discs");


        // find the id of the disc we want to delete
        let myDiscId = request.params.id;

        // we need to remove this disc from our "Innova" Bag array
        // there are a lot of ways to do this
        // Again I am choosing to use .find, to find the disc, and then .splice to remove it from the
        //Innova Bag array

        let matchingIndex = innovaBag.find(function(disc, index){
            return disc.id === myDiscId;
        })

        // if the index is less than 0, that means there was not a match to the id in the innova bag array
        if(matchingIndex < 0){
            response.json(undefined);
        } else {
            let deletedDisc = innovaBag.splice(matchingIndex, 1)
            response.json(deletedDisc)
        }
    };

//5
let updateDisc =

    function(request, response){
        console.log ("PUT /discs");


        // get the id to update from the route
        let myDiscId = request.params.id;

        // get the new description from the body
        let description = request.body.description;

        // get the new completed flag from the body
        let completed = request.body.completed;

        //we need to get the disc item we want to update from the innova bag array

        let matchingDisc = innovaBag.find(function(disc, index){
            return disc.id == myDiscId
        });

        // if we found a matching disc in the bag, update it
        // and return the updated item in the response
        // if not return undefined exclusively as previously explained.

        if(matchingDisc){
            matchingDisc.description = description;
            matchingDisc.completed = completed;
            response.json(matchingDisc);
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

module.exports = {getDiscBag, getSingleDisc, createDisc, deleteDisc, updateDisc};