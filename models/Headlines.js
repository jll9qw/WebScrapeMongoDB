// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var headline = {
  all: function(cb) {
    orm.all("headlines", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("headlines", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("headlines", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("headlines", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (headlinesController.js).
module.exports = headline;
