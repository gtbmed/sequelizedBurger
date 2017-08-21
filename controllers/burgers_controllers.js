// Dependencies
const express = require('express');
const burger = require('../models/burger.js')["Burger"]; // Route to sequelized Burger
// Create a routher using express
var router = express.Router();

// Route for getting all burger info stored in db
router.get("/", function(req, res) {
  Burger.findAll({}).then(function(data) {
    console.log(data);
    res.render("index", data);
  });
});

// Route for posting new burger / Creating a new burger
router.post("/burger/create", function(req, res) {
  Burger.create({
    burger_name: req.body.burger_name
  }).then(function(addBurger) {
    console.log(addBurger);
    res.redirect("/");
  });
});

***// Route for update a burger status to "devoured"
router.put('/burger/update/:id', function (req, res) {
  var condition = "id = " + req.params.id;
  burger.update({"devoured" : req.body.devoured}, condition, function(data) {
    res.redirect("/");
  });
});

module.exports = router;
