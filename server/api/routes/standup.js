const Standup = require('../../models/standup');

module.exports = function(router) {
	router.route('/standup').get(function(req, res) {
		console.log('/standup');
		res.status(200).json({ msg: 'found' });
	});

	router.route('/standup').post(function(req, res) {
		let note = new Standup(req.body);
		note.save(function(err, note) {
			if (err) return res.status(400).json(err);
			res.status(200).json(note);
		});
	});
};
