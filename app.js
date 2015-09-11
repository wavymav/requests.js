// Create a new http request object
var request = new XMLHttpRequest();

// Onreadeystatechange method Will run whenever a change in state occurs
request.onreadystatechange = function() {
	// When the readyState property returns a 4 it will run execute the given code
	if (request.readyState === 4) {
		// Will execute if the status property is 200 (O.K.)
		if (request.status === 200) {
			// Chenges the html within the div with #info to the responseText property
			document.getElementById('info').innerHTML = request.responeText;
		} else {
			// Alerts the user of the error
			alert(request.statusText);
		}
	}
};

// The open method takes tow parameters (this creates the request)
// 1) http method 'GET' to send the request for data to server
// 2) the url that points to the file you want
request.open('GET', 'about.html');

// sendRequest() fires when the #fire button is clicked
var sendRequest = function() {
	// Sends out the request to the server
	request.send();
	// Hides the #fire element
	document.getElementById('fire').style.display = 'none';
};
