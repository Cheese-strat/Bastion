const {update} = require("../../ez.js")
const {prefix} = require("../../config.json")
module.exports = {
	name: 'prefix',
	description: 'Changes the prefix for your server',
	args: true,
	usage:"<prefix>",
	cooldown:2,
	execute(msg, args, pokemon, data) {
		if (args[0]=== "reset"){
			data[msg.guild.id].prefix = prefix
			msg.channel.send(`Your prefix has been reset and is now: ${prefix}`)
		} else{
			data[msg.guild.id].prefix = args[0]
			msg.channel.send(`Your prefix is now: ${data[msg.guild.id].prefix}`)
		}
		update(data)
	},
};
