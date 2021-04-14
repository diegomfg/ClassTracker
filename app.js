const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const path = require('path');
const hbs = require('hbs');
            require('./src/database/connection').Connect();
const UserRoutes = require('./src/routes/UserRoutes');
const IndexRoutes = require('./src/routes/IndexRoutes');

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', ()=>{
  console.log("Registered Handlebars partials");
});

app.use(express.static('public'));

app.use('/', IndexRoutes);
app.use('/user', UserRoutes);

app.listen(process.env.PORT, ()=>{
  console.log(`Server running at port: ${process.env.PORT}`);
})