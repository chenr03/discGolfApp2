let express = require("express");

let router = express.Router();

let loginController = require("../Controller/loginController");

let auths = require("../middleware/authorization");


// GET /hello

router.get("/hello", loginController.hello);
// only requests that have a valid token are allowed in



// GET /private hello
router.get("/privateHello", auths.checkJWT, messageController.privateHello);
// if logged in, do stuff
// if not fail
if(loginController){
    console.log('Logged in 😀');
} else {
    console.log('Error', Error)
}

module.exports = router;