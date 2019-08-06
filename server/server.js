const express = require('express');
const cors = require('cors');

const foodNameServer = express();
foodNameServer.use( cors() );

var food = [
	{
		"favorite food": "french fries",
		"age": 5
	},
	{
		"favorite food": "mac and cheese",
		"age": 7
	},
	{
		"favorite food": "beer",
		"age": 22
	}
]

var name = [
    {
        "name": "Bob"
    },
    {
        "name": "Joe"
    },
    {
        "name": "John"
    }
]

foodNameServer.get('/favfoods', function(require, result) {
    result.send(food)
});
foodNameServer.get('/names', function(require, result) {
    result.send(name)
});
foodNameServer.listen(3001)