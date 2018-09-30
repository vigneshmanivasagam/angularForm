const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      empRoutes = require('./expressRoutes/employeeRoute');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{
  auth: {
      user: 'angularforms',
      password: 'dBzDG3IvrS78yrMCuyFGy5i0biVvxZIpFOfoP6cMTxluAKKF91LQd67g1Y4BI3wrTvtPmhuGcPABRvWuCt1xdQ=='
    }
}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/employee', empRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
