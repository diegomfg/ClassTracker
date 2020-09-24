const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const path = require('path');
const hbs = require('hbs');
const Connection = require('./src/database/connection');
const StudentRoutes = require('./src/routes/StudentRoutes');
const IndexRoutes = require('./src/routes/IndexRoutes');

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', ()=>{
  console.log("Registered Handlebars partials");
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', IndexRoutes);
app.use('/student', StudentRoutes);

app.listen(process.env.PORT, ()=>{
  console.log(`Server running at port: ${process.env.PORT}`);
})