// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express ();

// Dependencies 
const bodyParser = require ('body-parser');

// Middleware - Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origion allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
// Spin up the server
const server = app.listen(port, () => console.log(`Running on localhost: ${port}`));


let weatherData = {};

/// GET route
app.get('/all', getData);

function getData (req, res) {
  res.send(weatherData);
  console.log(weatherData)
}

// POST route
app.post('/addWeather', addWeather);

function addWeather(req,res){

  newEntry = { 
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
   }

   weatherData.push(newEntry)
   res.send(weatherData)
   console.log(weatherData);
}