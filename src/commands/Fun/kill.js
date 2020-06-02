const ez = require("../../ez.js")
module.exports = {
	name: 'kill',
	description: 'vore people',
	args: true,
	usage: '<target>',
	cooldown: 5,
	execute(msg, args, pokemon, data, client) {
		const user = ez.getuser(client, args.join(" "))
		msg.channel.send(`${user}, Congratulations, you now have no choice but to accept death`)
	}
};