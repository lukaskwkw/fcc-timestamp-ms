var express = require("express");
var parseDate = require("./dateParser.js");

var app = express();

app.use(express.static(process.cwd()))
app.get("/:date",function  (req,res) {
	res.send(JSON.stringify(parseDate(req.params.date)));
})

app.listen(5000);
console.log("Server running...");