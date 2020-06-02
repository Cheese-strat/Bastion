const ez = require("../../ez.js")
module.exports = {
	name: 'template',
	description: 'is the template to copy commands from, has all options enabled',
	args: true,
	usage: '<pokemon>',
	poke: false,
	cooldown: 5,
	admin: true,
	dev: 1,
	aliases: ['whois', 'find'],
	Case: false,
	execute(msg, args, pokemon, data, client) {
		msg.channel.send(`\`${msg.content}\``)
		return
	}
};