module.exports = {
	name: 'kick',
	description: 'Used to kick a user from a server',
	args: true,
	usage: '<target>',
	admin:true,
	cooldown:10,
	execute(msg) {
		if (msg.channel.memberPermissions(msg.author).has('KICK_MEMBERS')) {
			var member= msg.mentions.members.first();
			if (member ==undefined) return msg.channel.send("Please mention a valid user")
			member.kick().then((member) => {
				return msg.channel.send(member.displayName + " has been successfully kicked :point_right: ");
			}).catch(() => {
				return msg.channel.send("You cannot kick this user");
			});
		} else {
		  msg.channel.send("you dont have permission to do that")
		}
	}
};