const express = require('express');
// Make use of circular dependencies and export & reuse the app
const app = module.exports = express();
const path = require('path');


const middleware = require("./middleware");
const routes = require("./routes");

// we don't need the body-parser module anymore as of Express 4.16.0
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// MIDDLEWARE
app.use(middleware.cors);

// ROUTES
app.use("/api", routes);

// PUBLIC

// Serve all static files in the web directory
app.use(express.static(__dirname + '/web'));

// Start the app by listening on the default port
app.listen(process.env.PORT || 8080);
