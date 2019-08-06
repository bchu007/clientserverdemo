$(document).ready( startApp );

function startApp() {
	getData();
	getFood();
}

function getData() {
	var settings = {
		url: 'http://localhost:3001/names',
		method: 'get', 
		dataType: 'json',
		success: handleDataFromServer
	}
	$.ajax(settings);
}

function getFood() {
	var settings = {
		url: 'http://localhost:3001/favfoods',
		method: 'GET', 
		dataType: 'json',
		success: handleDataFromServer
	}
	$.ajax(settings);
}

function handleDataFromServer( response ) {
	for (var i = 0; i < response.length; i++) {
		var nameDiv = $('<div>').text(response[i].name)
		console.log(response[i])
		$('body').append(nameDiv)
	}
}
