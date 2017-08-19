// Dependencies
const express = require('express');
// Create a routher using express
var router = express.Router();

const burger = require('../models/burger.js');

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers : data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Route for posting new burger / Creating a new burger
router.post("/burger/insert", function(req, res) {
  burger.insert(["name", "devoured"], [req.body.name, req.body.devoured],
  function() {
    res.redirect("/");
  });
});

// Route for update a burger status to "devoured"
router.put('/burger/update/:id', function (req, res) {
  var condition = "id = " + req.params.id;
  burger.update({"devoured" : req.body.devoured}, condition, function(data) {
    res.redirect("/");
  });
});

module.exports = router;
