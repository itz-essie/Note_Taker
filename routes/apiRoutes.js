let jsonDB = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
// const indexJS = require("../public/assets/js/index.js");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(jsonDB);
  });

  app.post("/api/notes", function (req, res) {
    // uuid will give a string with a random id assigned to it
    req.body.id = uuidv4();

    jsonDB.push(req.body);

    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(jsonDB),
      function (err) {
        if (err) throw err;
        res.json(jsonDB);
      }
    );
  });

  app.delete("/api/notes/:id", function (req, res) {
    var noteId = req.params.id;
    jsonDB = jsonDB.filter((objofjsonDB) => objofjsonDB.id != noteId);
    res.json(jsonDB);
    // console.log(jsonDB)
  });
};
