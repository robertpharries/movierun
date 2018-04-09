const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

const inFolder = process.argv[2];

// app.configure(function() {
app.set('folder', inFolder);
// });

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

//import routes
var routes = require("./routes/routes");
//register routes
routes(app);

var routesList = require("./routes/listRoutes");
routesList(app);

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
