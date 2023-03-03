const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


mongoose.connect('mongodb://localhost/crud-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
}).catch(err => {
  console.log('Cannot connect to the database', err);
  process.exit();
});


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CRUD app' });
});


require('./app/routes/customer.routes.js')(app);


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
