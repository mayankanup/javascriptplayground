var sys = require("util"),
    http = require("http"),
	url = require("url"),
	path = require("path"),
	fs = require("fs");

/*
Shows the contents of file on browser.
*/	
http.createServer(function(request, response){
	var uri = url.parse(request.url).pathname;
	console.log("URI = " +uri);
	var filename = path.join(process.cwd(), uri);
	console.log("Filename = "+filename);
	fs.exists(filename, function(exists){
		if(exists) {
			fs.readFile(filename, function(err, data){
				response.writeHead(200);
				response.end(data);
			});
		} else {
			response.writeHead(404);
			response.end();
		}
	});
}).listen(13337);