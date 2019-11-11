const TeamMember = require('../../models/teamMember');

module.exports = function(router){
    router.get('/team',function(req,res){

    });
    router.post('/team', function(req, res) {
		let teamMember = new TeamMember(req.body);
		teamMember.save(function(err, teamMember) {
            if(err) return res.status(400).json(err);
            res.status(200).json(teamMember);
        });
	});
};