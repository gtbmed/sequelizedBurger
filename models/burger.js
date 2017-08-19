// Dependencies
const orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // Add a new burger entry
  insert: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // Update a burger entry.  Usually, when "devoured"
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
