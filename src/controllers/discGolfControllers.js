//1
let getDiscBag =

    function(request, response){
        console.log ("GET /discs");
        response.send("from GET /discs")
    }

//2
let getSingleDisc =

    function(request, response){
        console.log ("GET /discs");
        response.send("from GET /discs")
    }

//3
let createDisc =

    function(request, response){
        console.log ("POST /discs");
        response.send("from POST /discs")
    }

//4
let deleteDisc =

    function(request, response){
        console.log ("DELETE /discs");
        response.send("from DELETE /discs")
    }

//5
let updateDisc =

    function(request, response){
        console.log ("PUT /discs");
        response.send("from GET /discs")
    }

module.exports = {getDiscBag, getSingleDisc, createDisc, deleteDisc, updateDisc};