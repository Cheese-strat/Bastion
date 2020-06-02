const ez = require("../../ez.js")
module.exports = {
	name: 'nickname',
	description: 'changes a user\'s nickname',
	cat: "moderator",
	args: true,
	usage: '<target> <nickname>',
	poke: false,
	cooldown: 5,
	admin: true,
	dev: false,
	aliases: ['nick', 'changename'],
	execute(msg, args, pokemon, data, client) {
		ez.getuser()
	}
};