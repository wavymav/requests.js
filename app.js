// Create a new http request object
var request = new XMLHttpRequest();

// Onreadeystatechange method Will run whenever a change in state occurs
request.onreadystatechange = function() {
	// When the readyState property returns a 4 it will run execute the given code
	if (request.readyState === 4) {
		// Will execute if the status property is 200 (O.K.)
		if (request.status === 200) {
			// Stores the parsed Json string(Now an Array Object) in players
			var players = JSON.parse(request.responseText),
					template = '';
			// Iterates through each item of players[]
			for (var i = 0; i < players.length; i++) {
				// Each []index (which is an {}) is passed in the player
				player = players[i];
				// Concats all the html elements needed in addition to giving each objects property val
				template += '<div class="col-sm-6 col-md-4">' +
					'<div class="thumbnail">' +
						'<img src="' + player.image + '" alt="'+ player.name +'">' +
						'<div class="caption">' +
							'<h3>' + player.name + ' <strong><i>#' + player.number + '</i></strong></h3>' +
							'<p><strong>Position: </strong>' + player.position + '</p>' +
							'<p><strong>Age: </strong>' + player.age + '</p>' +
							'<p><strong>Experince: </strong>' + player.experience + ' year(s)</p>' +
							'<p><strong>College: </strong>' + player.college + '</p>' +
						'</div>' +
					'</div>' +
				'</div>';
			}
			// Grabs the target element by # and stores the finished template within the terget element
			document.getElementById('output').innerHTML = template;
		}
	}
};

// The open method takes tow parameters (this creates the request)
// 1) http method 'GET' to send the request for data to server
// 2) the url that points to the file you want
request.open('GET', 'players.json');

// Sends out the request to the server
request.send();
