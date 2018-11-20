var http = require('http');

var app = http.createServer(function(req,res){
	    var data = {
              "items": [
			  {"DisplayName": "robsmith","guid": "a1234b"},
			  {"DisplayName": "northamericasales","guid": "wet1334"},
			  {"DisplayName": "conferenceB355A","guid": "7987shj"},
			  {"DisplayName": "projectorB355A","guid": "jkld87987"},
			  {"DisplayName": "acmelinkedmail","guid": "kjiu343h"}
              ]};
    res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(data));
});
app.listen(9000);

console.log("http://localhost:9000");