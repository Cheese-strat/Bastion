module.exports = {
	name: 'ban-words',
	description: 'lists all the banned words in this server',
	args: false,
	cooldown: 5,
	aliases: ['curse-words', 'words'],
	execute(msg, args, pokemon, data) {
		var output = data[msg.guild.id].banwords.join("`, `")
		if (data[msg.guild.id].banwords.length < 1)return msg.channel.send("This server has no banned words")
		const Embed = {
			color: 0x0099ff,
			title: `${msg.guild.name}'s banned words:`,
			description:`\`${output}\``,
			thumbnail: {
				url: msg.guild.icon_url,
			},
			timestamp: new Date(),
		};		
		msg.channel.send({
			embed: Embed
		});
	}
};