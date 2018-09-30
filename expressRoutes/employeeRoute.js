// employee routes.js

var express = require('express');
var addEmployee = express();
var employeeRoutes = express.Router();

// Require Item model in our routes module
var employeeModel = require('../models/employee');

// Defined store route
employeeRoutes.route('/add').post(function (req, res) {
  var employee = new employeeModel(req.body);
  employee.save()
    .then(item => {
    res.status(200).json({'employee': employee});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
employeeRoutes.route('/').get(function (req, res) {
  employeeModel.find(function (err, employees){
    if(err){
      console.log(err);
    }
    else {
      res.json(employees);
    }
  });
});

// Defined edit route
/*coinRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Coin.findById(id, function (err, coin){
      res.json(coin);
  });
});

//  Defined update route
coinRoutes.route('/update/:id').post(function (req, res) {
   Coin.findById(req.params.id, function(err, coin) {
    if (!coin)
      return next(new Error('Could not load Document'));
    else {
      coin.name = req.body.name;
      coin.price = req.body.price;

      coin.save().then(coin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});*/

// Defined delete | remove | destroy route
employeeRoutes.route('/delete/:id').get(function (req, res) {
   employeeModel.findByIdAndRemove({_id: req.params.id}, function(err, employee){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = employeeRoutes;
