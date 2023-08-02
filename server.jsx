const express = require('express')
const app = express() //Line 2
const port = process.env.PORT || 3001 //Line 3
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/index.jsx')
const path = require('path')
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, 'client/build')))

// Add routes, both API and view
app.use(routes)

// All other GET requests handled before will return our React app
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
})

// //Auth0 User Authentication
// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://dev-cggj778i.us.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'https://fairline-defense.highpowerdata.com',
//   issuer: 'https://dev-cggj778i.us.auth0.com/',
//   algorithms: ['RS256']
// })

// app.use(jwtCheck)

// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource')
// })
// Connect to the Mongo DB
mongoose
  .connect("mongodb://localhost:27017/fairline_db", { useNewUrlParser: true }) // use a promise to check if success
  .then(() => console.log('MongoDB Connected!'))
  .catch(error => console.log('MongoDB did not connect: ', error))

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`))
