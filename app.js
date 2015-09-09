// Create a new http request object
var request = new XMLHttpRequest();

// Onreadeystatechange method Will run whenever a change in state occurs
request.onreadystatechange = function() {
	// When the readyState property returns a 4 it will run execute the given code
	if (request.readyState === 4) {
		// Chenges the html within the div with #info to the responseText property
		document.getElementById('info').innerHTML = request.responeText;
	}
};
