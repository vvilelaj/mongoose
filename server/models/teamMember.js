const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
	name: { type: String },
	description: { type: String },
	isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
