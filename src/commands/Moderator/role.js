const ez = require("../../ez.js")
module.exports = {
	name: 'role',
	description: 'edit and view a role',
	cat: "misc",
	args: true,
	usage: '<view, edit, delete>',
	cooldown: 5,
	admin: true,
	aliases: ['r'],
	execute(msg, args, pokemon, data, client) {
		if (args.join(" ").includes("delete")) {
			msg.channel.send("enter the name of the role you would like to delete!")
			const filter = m => m.author.id === msg.author.id
			const collector = msg.channel.createMessageCollector(filter, {
				time: 15000
			});
			collector.on('collect', m => {
				var role = msg.guild.roles.find(x => x.name === m.content)
				if (!role) return msg.channel.send("i could not find that role")
				//role.delete().catch(console.error)
				msg.channel.send(`Deleted role: ${role.name}`)
			});
			collector.on('end', collected => {
				if (collected.size < 1) return msg.channel.send("You didnt enter a role!")
				msg.channel.send(`${collected.array().map(string => {
					msg.guild.roles.find(x =>
						x.name === string
					)
				}).filter(x => {
					x != undefined,
						x != null
				}).map(y => {
					msg.guild.roles.find(z =>
						z.name === y
					)
				}).map(e => {
					e.name
				}).join(
					",\n"
				)
					}`)
			});
		}
	}
};