
const server = require('express');
const app = server();
const path    = require("path");
const request = require('request');

app.get('/', (req, res) => res.send('Hello Home!'));


app.get('/client-render', function(req, res) {
  res.sendFile(path.join(__dirname+'/client-render.html'));
});


app.get('/client-render/api', function(req, res) {
	request({
		method: 'GET',
		uri: 'https://randomuser.me/api/?results=5',
	}, function (error, response, body){
		if(!error && response.statusCode == 200){
			res.json(body);
		}
	})
});

app.listen(3030, () => console.log('Example app listening on port 3030!'));


