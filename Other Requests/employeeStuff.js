// jQuery
$(document).ready(function() {
  var urlRooms = 'JSON/rooms.json';
    $.getJSON(urlRooms, function(response) {
      var statusTemplate = '<ul class="bulleted">';
      $.each(response, function(index, room) {
        if (room.available === true) {
          statusTemplate += '<li class="empty">';
        } else {
          statusTemplate += '<li class="full">';
        }
        statusTemplate += room.room +'</li>';
      });
      statusTemplate += '</ul>';
      $('#roomList').html(statusTemplate);
    }).fail(function(failXHR) {
      var errorMessage = "<p>Sorry! There's been an error. Please try again later.<p>";
      $('#roomList').html(errorMessage);
    });

    var urlEmployees = 'JSON/employees.json';
      $.getJSON(urlEmployees, function(response) {
        var statusTemplate = '<ul class="bulleted">';
        $.each(response, function(index, employee) {
          if (employee.inoffice === true) {
            statusTemplate += '<li class="in">';
          } else {
            statusHTML += '<li class="out">';
          }
          statusTemplate += employee.name +'</li>';
        });
        statusTemplate += '</ul>';
        $('#employeeList').html(statusTemplate);
    }).fail(function(failXHR) {
      var errorMessage = "<p>Sorry! There's been an error. Please try again later.<p>";
      $('#employeeList').html(errorMessage);
    });
});

// ==========================================================================

var meetingRoomRequest = new XMLHttpRequest(),
    employeeRequest = new XMLHttpRequest();

meetingRoomRequest.onreadystatechange = function () {
  if (meetingRoomRequest.readyState === 4) {
		if (meetingRoomRequest.status === 200) {
	    var rooms = JSON.parse(meetingRoomRequest.responseText),
	    		statusTemplate = '<ul class="rooms">';
	    for (var i=0; i<rooms.length; i += 1) {
	      if (rooms[i].available === true) {
	        statusTemplate += '<li class="empty">';
	      } else {
	        statusTemplate += '<li class="full">';
	      }
	      statusTemplate += rooms[i].room + '</li>';
	    }
	    statusTemplate += '</ul>';
	    document.getElementById('roomList').innerHTML = statusTemplate;
		}
  }
};
meetingRoomRequest.open('GET', 'JSON/rooms.json');
meetingRoomRequest.send();


employeeRequest.onreadystatechange = function () {
  if (employeeRequest.readyState === 4) {
		if (employeeRequest.status === 200) {
	    var employees = JSON.parse(employeeRequest.responseText),
	    		statusTemplate = '<ul class="bulleted">';
	    for (var  i = 0; i < employees.length; i ++) {
	      if (employees[i].inoffice === true) {
	        statusTemplate += '<li class="in">';
	      } else {
	        statusTemplate += '<li class="out">';
	      }
	      statusTemplate += employees[i].name + '</li>';
	    }
	    statusHTML += '</ul>';
			document.getElementById('employeeList').innerHTML = statusTemplate;
		}
  }
};
employeeRequest.open('GET', 'JSON/employees.json');
employeeRequest.send();
