var express = require("express");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. Use this later in listener
var PORT = process.env.PORT || 9889;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listenerCount(PORT, function(){
    console.log("App is lisrening on PORT: " + PORT);
});