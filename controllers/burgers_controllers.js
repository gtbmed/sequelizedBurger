// Dependencies
const express = require('express');
const db = require('../models/'); // Route to sequelized Burger
// Create a routher using express
var router = express.Router();

// Route for getting all burger info stored in db
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    console.log(data);
    res.render("index", data);
  });
});

// Route for posting new burger / Creating a new burger
router.post("/burger/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(addBurger) {
    console.log(addBurger);
    res.redirect("/");
  });
});

// Route for update a burger status to "devoured"
router.put('/burger/update/:id', function (req, res) {
  db.burger.update({
    devoured: req.body.devoured
  }, {
  where: {
    id: req.params.id
  }).then(function() {
    res.redirect("/");
  });
});

module.exports = router;
