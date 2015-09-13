// Create a new http request object
var request = new XMLHttpRequest();

// Onreadeystatechange method Will run whenever a change in state occurs
request.onreadystatechange = function() {
	// When the readyState property returns a 4 it will run execute the given code
	if (request.readyState === 4) {
		// Will execute if the status property is 200 (O.K.)
		if (request.status === 200) {
			// Stores the parsed Json string(Now an Array Object) in players
			var players = JSON.parse(request.responseText);
		}
	}
};

// The open method takes tow parameters (this creates the request)
// 1) http method 'GET' to send the request for data to server
// 2) the url that points to the file you want
request.open('GET', 'players.json');

// Sends out the request to the server
request.send();
