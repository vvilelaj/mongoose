const Project = require('../../models/project');

module.exports = function(router) {
	router.get('/projects', function(req, res) {});
	router.post('/projects', function(req, res) {
		let project = new Project(req.body);
		project.save(function(err, project) {
			if (err) return res.status(400).json(err);
			res.status(200).json(project);
		});
	});
};
