const ez = require("../../ez.js")
module.exports = {
	name: 'poll',
	description: 'Create a poll in any channel of your choice',
	args: true,
	usage: '<channel> <message>',
	poke:false,
	cooldown: 5,
	admin: true,
	dev: false,
	aliases: ['pollstart'],
	execute(msg, args, pokemon, data, client) {
		var channel = ez.getchannel(args.shift())
		var string = args.join(" ")
		msg.channel.send(`creating the poll in ${channel}`)
		var embed = ez.embed("RANDOM", string, msg.author)
		channel.send(embed).then(p=>{
			Promise.all([p.react("👎"), p.react("👍")])
		});
	}
};
