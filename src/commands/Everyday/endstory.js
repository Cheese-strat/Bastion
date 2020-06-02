const ez = require("../../ez.js")
module.exports = {
	name: 'endstory',
	description: 'the compile and end the story, has to be used in a channel with story in the name',
	args: true,
	usage: '<message id of the start of the story>',
	poke: false,
	cooldown: 10,
	admin: false,
	dev: 0,
	aliases: ['end', 'story', 'es'],
	Case: false,
	execute(msg, args, pokemon, data, client) {
		if (!msg.channel.name.includes("story")) return msg.channel.send(`This command must be used in a channel with story in the name`)
		msg.channel.messages.fetch(args[0]).then(async message => {
			let m = await msg.channel.send(`fetching messages...`)
			let Messages = await msg.channel.messages.fetch({ after: message })
			let MContent = Messages.filter(m => !c.content.trim().includes(" ")).map(m => m.content)
			let string = MContent.join(" ")
			await m.delete()
			if (string.length <= 2000) return msg.channel.send(string)

			/*for (x = 0; x > string.length / 2000; x++) {

			}
			while (string.length > 2000){
				msg.channel.send(string.slice(0, 2000))
			}msg.channel.send(string)
			*/
		})
	}
};