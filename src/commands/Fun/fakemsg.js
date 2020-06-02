const {
	getmember,
	update
} = require("../../ez.js")
module.exports = {
	name: 'fakemsg',
	description: 'Uses webhooks to send a fake message as a specified user',
	args: true,
	usage: '<target> <string to send>',
	cooldown: 10,
	aliases: ['fake', 'fakemessage', 'fmsg', 'fm'],
	dev: true,
	execute: async(msg, args, p, data, client) =>{
		var member = await getmember(args[0], msg.guild.members)
		if (member == undefined) return msg.channel.send("I couldn't find that user")
		var user = member.user
		var string = args.slice(1).join(" ")
		if ((string == undefined) || (string.length < 1)) return msg.channel.send("I couldnt find your message!")
		msg.delete().catch(e => console.log(e));
		if (data[msg.guild.id].channels[msg.channel.id] == undefined || data[msg.guild.id].channels[msg.channel.id][user.id] == undefined) {
			msg.channel.createWebhook(user.username, user.defaultAvatarURL({format:"png"}))
				.then(wb => {
					wb.send(string)
					if (data[msg.guild.id].channels[msg.channel.id] == undefined) data[msg.guild.id].channels[msg.channel.id] = {}
					data[msg.guild.id].channels[msg.channel.id][user.id] = {}
					data[msg.guild.id].channels[msg.channel.id][user.id].id = wb.id
					data[msg.guild.id].channels[msg.channel.id][user.id].token = wb.token
					update(data)
				})
				.catch(error => {
					if (error.name === "DiscordAPIError") {
						msg.channel.fetchWebhooks().then(hooks => {
							var coll = hooks.filter(h => h.owner.id == client.user.id)
							coll.deleteAll()
							data[msg.guild.id].channels[msg.channel.id] = {}

						})
						msg.channel.createWebhook(user.username, user.avatarURL)
							.then(webhk => {
								webhk.send(string)
								if (data[msg.guild.id].channels[msg.channel.id] == undefined) data[msg.guild.id].channels[msg.channel.id] = {}
								data[msg.guild.id].channels[msg.channel.id][user.id] = {}
								data[msg.guild.id].channels[msg.channel.id][user.id].id = webhk.id
								data[msg.guild.id].channels[msg.channel.id][user.id].token = webhk.token
								update(data)
							})
							.catch(error => {
								console.log("should have just deleted all the webhooks in this channel")
								console.log(error)
							})
					}
				})
		} else {
			console.log(data[msg.guild.id].channels)
			client.fetchWebhook(data[msg.guild.id].channels[msg.channel.id][user.id].id, data[msg.guild.id].channels[msg.channel.id][user.id].token)
				.then(wb => {
					if (wb == undefined) {
						msg.channel.createWebhook(user.username, user.avatarURL)
							.then(wb => {
								wb.send(string)
								if (data[msg.guild.id].channels[msg.channel.id] == undefined) data[msg.guild.id].channels[msg.channel.id] = {}
								data[msg.guild.id].channels[msg.channel.id][user.id] = {}
								data[msg.guild.id].channels[msg.channel.id][user.id].id = wb.id
								data[msg.guild.id].channels[msg.channel.id][user.id].token = wb.token
								update(data)
							})
							.catch(error => {
								console.error(error)
							})
					} else {
						wb.send(string)
					}
				})
				.catch(error => console.log(error))
		}
		return
	}
};