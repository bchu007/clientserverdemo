$(document).ready( startApp );

function startApp() {
	getData();
}

function getData() {
	var settings = {
		url: '../server/getnames.json',
		method: 'get', 
		dataType: 'json',
		data: {
			name: 'Joe'
		},
		success: handleDataFromServer
	}
	$.ajax(settings);
}

function handleDataFromServer( response ) {
	console.log(response);
}
