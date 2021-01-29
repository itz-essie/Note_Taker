const jsonDB = require("../db/db.json");
const fs = require("fs");


module.exports = function(app) {

app.get("/api/notes", function(req, res) {
    res.json(jsonDB);
  });

  app.post("/api/notes", function (req, res) {


  });

  app.delete("/api/notes/:id", (req, res) => {

    
  })
}