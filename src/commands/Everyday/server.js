module.exports = {
	name: 'server',
	description: 'Has useful information about the server',
	args: false,
	aliases: ['server-info', 'guild', 'guild-data', 'guild-info', 'server-data'],
	cooldown:3,
	execute(msg) {
		const guild = msg.guild.fetch()
		const guildcreationdate = `${guild.createdAt.getDate()}/${guild.createdAt.getMonth()}/${guild.createdAt.getFullYear()}`
		const Embed = ez.embed(0x0099ff,guild.name)   
		Embed.setThumbnail(guild.iconURL)
		Embed.addFields(
			{name: 'Amount of humans:', value: guild.members.cache.filter(m=> !m.user.bot), inline: true},
			{name: 'Number of bots:', value: guild.members.cache.filter(m=> m.user.bot), inline: true},
			{ name: 'Number of roles:', value: guild.roles.cache.size, inline: true},
			{name: `Number of channels`, value: guild.channels.cache.size, inline: true},
			{name: 'Owner: ', value: guild.owner.user.tag, inline: true},
			{name: `Server creation date:`, value: guildcreationdate, inline: true}
		)
		Embed.setFooter(`Server id: ${msg.guild.id}`);
		return msg.channel.send(Embed);
	}
};
