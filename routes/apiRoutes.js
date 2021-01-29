var jsonDB = require("../db/db.json");

module.exports = function(app) {

app.get("/api/notes", function(req, res) {
    res.json(jsonDB);
  });

  app.post("/api/notes", function (req, res) {

  });
}