const ez = require("../../ez.js")
module.exports = {
	name: 'avatar',
	description: 'Shows the pfp of the mentioned user, or the message author if no user is mentioned',
	args: false,
	usage: '<user>',
	aliases: ['pfp', 'profile'],
	cooldown: 2,
	execute: async (msg, args) => {
		let member = await ez.getmember(args.join(" "), msg.guild.members);
		if (!member && !args.length) member = msg.member
		if (!member) return msg.channel.send("I couldn't find that target")
		const embed = ez.embed(member.displayHexColor, `${member.user.username}'s avatar:`)
		embed.setImage(member.user.displayAvatarURL({ format: "png" }))
		return msg.channel.send(embed)
	}
};