var http = require("http"),
  express = require('express'),
  path = require('path'),
  gzip = require('compression'),
  app = express();

//set the port
app.set('port', process.env.PORT || 8000);

app.use(gzip());
app.use(express.static(path.join(__dirname, '/dist')));

setInterval(function() {
    http.get("http://adam.bouzourene.com");
}, 300000);

// Listen for requests
var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});