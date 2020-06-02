const {
	getmember
} = require("../../ez.js")
module.exports = {
	name: 'ban',
	description: 'Bans a user from the server',
	cooldown: 10,
	args: true,
	usage: "<target>",
	admin: true,
	execute(msg, args, pokemon, data, client) {
		if (!msg.channel.memberPermissions(msg.author).has('BAN_MEMBERS')) return msg.channel.send("you dont have permission to do that")
		if (msg.channel.memberPermissions(client.user).has('BAN_MEMBERS')) return msg.channel.send("Insufficient permissions, please contact an administrator")
		var member = getmember(msg.guild, args.join(" "))
		if (member == undefined) return msg.channel.send("Please mention a valid user")
		member.ban().then((member) => {
			return msg.channel.send(member.displayName + " has been successfully banned :point_right: ");
		}).catch(() => {
			return msg.channel.send("You cannot ban this user");
		});

	}
};