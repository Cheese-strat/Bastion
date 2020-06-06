module.exports = {
	name: __filename.slice(0, -3),
	description: "Used by the developers to test certain commands",
	args: {
		required: false,
		case: false,
		usage: ""
	},
	cooldown: 1,
	aliases: ["pong"],
	permissions: {
		bot: [],
		author: [],
		mentions: []
	},
    execute(msg, args) {

		msg.channel.send(`flags: |${msg.flags}|`)
		msg.channel.send(`Arguments: |${args}|`)

		/*msg.channel.send("test").then(async embedMessage => {
			await embedMessage.react("⏩")
			await embedMessage.react("⏭")
			await msg.channel.send("1")
			const filter = (reaction, user) => {
				return ['⏩', '⏭'].includes(reaction.emoji.name);
			};

			embedMessage.awaitReactions(filter, {
				max: 1,
				time: 100000,
				errors: ['time']
			})
				.then(collected => {
					const reaction = collected.first();

					if (reaction.emoji.name === '⏩') {
						embedMessage.delete();
						message.channel.send("help2");
					} else if (reaction.emoji.name === '⏭') {
						embedMessage.delete();
						msg.channel.send("help3");
					}
				})
				.catch(collected => {
					console.log('None reaction.');
				});


		});*/
		//msg.guild.channels.get("679689608933408782").setName("Imorgon Studios")
		/*
		var parsed = 10
		let arr = []
		for (i=0;i<parsed;i++){
			arr.push(Math.floor(Math.random()*6+1))
		}
		msg.channel.send(`Dice command asked for ${parsed} dice.\nProgram returned: ${arr.join(", ")}`)
		*/

		//msg.channel.send(client.fetchUser("549963247592275968").client.verified)
		//msg.channel.send(`testing user: ${client.fetchUser("549963247592275968").tag}`)
		//fs.writeFileSync("../roles.json", JSON.stringify(msg.guild.roles.values()))

		/*
		const mem = ez.getmember(msg.guild, args[0])
		mem.highestRole.setColor(args[1]).then(y => {
			return msg.channel.send("color changed!")
		}).catch(Error => {
			return msg.channel.send("insufficient perms bruh")
		})*/
		/*
		if (msg.member.VoiceChannel) {
			if (args[1] === "all") {
				msg.member.VoiceChannel.members.array().forEach(member => {
					member.setVoiceChannel(args[0])
						.catch(console.error);
					msg.channel.send("Moved!")
				});
			} else {
				let args0 = args[0]
				const member = ez.getmember(msg.guild, args.slice(1).join(" "))
				if (!member) return msg.channel.send("cannot find that member")
				member.setVoiceChannel(args0)
					.catch(console.error);
				msg.channel.send("Moved!")
			}
		}
		if (args[1] === "all") {
			msg.guild.members.array().forEach(member => {
				member.setVoiceChannel(args[0])
					.catch(console.error);
				msg.channel.send("Moved!")
			});
		} else {
			let args0 = args[0]
			const member = ez.getmember(msg.guild, args.slice(1).join(" "))
			if (!member) return msg.channel.send("cannot find that member")
			member.setVoiceChannel(args0)
				.catch(console.error);
			msg.channel.send("Moved!")
		}
		*/
		return msg.channel.send(`\`${msg.content}\``)
	},
};