const ez = require("../../ez.js")
module.exports = {
	name: __filename.slice(0, -3),
	description: "Shows the pfp of the mentioned user, or the message author if no user is mentioned",
	args: {
		required: false,
		case: false,
		usage: ""
	},
	cooldown: 2,
	aliases: ['pfp', 'profile'],
	permissions: {
		bot: [
			"VIEW_CHANNEL",
			"SEND_MESSAGES",
			"EMBED_LINKS",
			"ATTACH_FILES",
			"READ_MESSAGE_HISTORY",
			"VIEW_GUILD_INSIGHTS",
		],
		author: [
			"VIEW_CHANNEL",
			"SEND_MESSAGES",
			"READ_MESSAGE_HISTORY",
			"VIEW_GUILD_INSIGHTS",
		],
		mentions: [
			"VIEW_CHANNEL",
			"SEND_MESSAGES",
			"READ_MESSAGE_HISTORY",
			"VIEW_GUILD_INSIGHTS",
		]
	},
	execute(msg, args) {
		let member = await ez.getmember(args.join(" "), msg.guild.members);
		if (!member && !args.length) member = msg.member
		if (!member) return msg.channel.send("I couldn't find that target")
		const embed = ez.embed(member.displayHexColor, `${member.user.username}'s avatar:`)
		embed.setImage(member.user.displayAvatarURL({
			format: "png"
		}))
		return msg.channel.send(embed)
	}
};