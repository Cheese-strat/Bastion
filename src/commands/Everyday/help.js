const ez = require("../../ez.js")
const fs = require("fs")
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	cat: "support",
	args: false,
	usage: '<command name>',
	aliases: ['commands', "h"],
	cooldown: 5,
	execute(msg, args, p, data, client) {
		args.join(" ")
		let prefix = data[msg.guild.id].prefix
		data = [];
		const {
			commands
		} = msg.client;
		if (!args.length) {
			//const embed = ez.embed(msg.member.displayHexColor, "My commands:")
			/*for (const commFolder of fs.readdirSync("./commands")) {
				console.log(commFolder)
				let info = JSON.parse(fs.readFileSync(`./commands/${commFolder}/info.json`))
				embed.addField(commFolder, info.desc)
			}*/
			//embed.setDescription(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
			//embed.addField(`Here\'s a list of all my commands:${commands.map(command => command.name).join(', ')}\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)

			return msg.author.send(`**My Commands:** \nYou can send \`${prefix}help [command name]\` to get info on a specific command!\mHere\'s a list of all my commands:${commands.map(command => command.name).join('\n')}\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
				.then(() => {
					msg.reply(`I've sent you a DM!`);
				})
				.catch(error => {
					msg.client.channels.cache.get("629683449976061971").send(`Could not send help DM to ${msg.author.tag}.\n`, error);
					console.log(error)
					msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
				});
		}
		if (isNaN(Number(args))) {
			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
			if (!command) return msg.reply('that\'s not a valid command!');
			const exampleEmbed = ez.embed('#0099ff', 'Some title')
				.setDescription('Some description here')
				.setThumbnail('https://i.imgur.com/wSTFkRM.png')
				.setImage('https://i.imgur.com/wSTFkRM.png')
				.setTimestamp()
				.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
			let categories = commands.map(c => c.category).filter(category => commands.map(c => c.category).filter(cat => cat === category).length === 1)
			for (x = 0; x > categories.length; x++) {
				exampleEmbed.addField(`Page: ${x}`, `${categories[x]} commands`)
			}
			categories.forEach(category => {
				exampleEmbed.addField(category, 'Some value here')
			})
			/*
						data.push(`**Name:** ${command.name}`);
						if (command.cooldown === 1) {
							var seconds = "second"
						} else {
							var seconds = "seconds"
						}
						if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
						if (command.description) data.push(`**Description:** ${command.description}`);
						if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
						if (command.cooldown != undefined) data.push(`**Cooldown:** ${command.cooldown || 3} ${seconds}`);
			*/
			return msg.channel.send(exampleEmbed);
		}
	}
};
