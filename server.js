var express = require("express");
var parseDate = require("./dateParser.js");

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(process.cwd()))
app.get("/:date",function  (req,res) {
	res.send(JSON.stringify(parseDate(req.params.date)));
})

app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});