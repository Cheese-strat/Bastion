const {
	update
} = require("../../ez.js")
module.exports = {
	name: 'unban-word',
	description: 'Removes this word from this servers banned words',
	args: true,
	usage: '<word>',
	cooldown: 5,
	admin: true,
	execute(msg, args, pokemon, data) {
		if (!data[msg.guild.id].banwords.has(args[0])) return msg.channel.send(`${args[0]} is not one of this servers banned words`)
		data[msg.guild.id].banwords.filter(x => x !== args[0])
		update(data)
		msg.channel.send(`I have removed \`${args[0]}\` from this servers list of banned words`)
	}
};