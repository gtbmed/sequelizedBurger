// Dependencies
const db = require('../models');

// Routes
module.exports = function(app) {
  // Get list of burgers
  app.get('/api/burgers', function(req, res) {
    db.Burger.findAll({
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
  // Add new burgers
  app.post('/api/burgers', function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
  // Update status of burger to 'devoured'
  app.put('/api/bugers/', function(req, res) {
    db.Burger.update({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};
