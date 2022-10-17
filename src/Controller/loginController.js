let hello = function(request, response) {

    console.log('hello() in login controller');
    response.send("Hello World");
}

let privateHello = function(request, response) {

    let userName = request.userInfo.fullName;

    console.log(`Private hello in login controller`);
    response.send(`Hello there, you are now logged in` +userName);
}

module.exports = {hello, privateHello};