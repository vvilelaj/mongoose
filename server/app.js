const express = require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.set('port', process.env.PORT || 8801);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use(function(req, res) {
	const err = new Error('Not found');
	err.status = 404;
	res.json(err);
});

mongoose.connect(
	'mongodb://mongooseaccount:SikfTUtxZBlA7ZeQ7Q96yVHFGN89n6TCeDKo6A3P1N5qcWE7PPIvyD43r92RmUruon3tafzAzTcfKGEpIYXp7Q==@mongooseaccount.documents.azure.com:10255/virtualstandups?ssl=true&replicaSet=globaldb',
	{ useNewUrlParser: true }
);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	console.log('Connected to MongoDB');
	app.listen(app.get('port'), function() {
		console.log('API Server listening on port ' + app.get('port'));
	});
});
