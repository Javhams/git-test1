//requeriremos los paquetes
const express = require('express');
const request = require('request');

var port = 5000;
const app = express();

const bodyParser =require('body-parser');
const path = require('path');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(express.static(path.join(__dirname, 'public')));

//routes configuracion

const routes = require('./routes/routes');

//server setting 
routes(app);

// Start the server

 const server = app.listen(port, (error) => {
     if (error) return console.log(`Error: ${error}`);
     console.log(`Server listening on port ${server.address().port}`);
 });
