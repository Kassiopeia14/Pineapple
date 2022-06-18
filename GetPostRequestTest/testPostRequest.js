const express = require("express");
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
  
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/login", urlencodedParser, function (request, response) {
    var user_name = request.body.user;
    var password = request.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    response.end("finally it worked");
});
   
app.listen(3000, ()=>console.log("Server started..."));