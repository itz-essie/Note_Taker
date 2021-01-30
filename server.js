const express = require("express");
const path = require("path");
const fs = require("fs");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. Use this later in listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, function(){
    // npm run start- server watch
    console.log("App is listening on PORT: " + PORT);
});