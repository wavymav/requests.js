var employeeRequest = new XMLHttpRequest();
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
employeeRequest.open('GET', '');
employeeRequest.send();



var meetingRoomRequest = new XMLHttpRequest();

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
meetingRoomRequest.open('GET', '');
meetingRoomRequest.send();
