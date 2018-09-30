var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Employees = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  selection : {
    typpe: String
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employees', Employees);
