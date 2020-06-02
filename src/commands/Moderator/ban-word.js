const {update} = require("../../ez.js")
module.exports = {
	name: 'ban-word',
	description: 'keeps the chat clean of any words add by this command',
	args: true,
	usage: '<word>',
	cooldown:5,
	admin:true,
	execute(msg, args, pokemon, data) {
		data[msg.guild.id].banwords.push(args[0])
		update(data)
		msg.channel.send(`I have added \`${args[0]}\` to this servers list of banned words`)
	}
};