// Loads the   express module   and uses it to get an   express.Router object
const express = require('express');
const router = express.Router();

/* GET users listing. */
// Specifies a route on that object
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// The route defines   a callback   that will be invoked whenever an HTTP GET request with the correct pattern is detected
// The matching pattern is the route specified when the module is imported   ("/users")  
// plus whatever is defined in this file   ("/")  .
// In other words, this route will be used when a URL of /users/ is received.

router.get('/cool', function(req, res, next) {
  res.send('You\'re so cool');
});

// Exports the router from the module
module.exports = router;
