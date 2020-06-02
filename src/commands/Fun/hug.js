module.exports = {
	name: 'hug',
	description: 'Hugs the target, everyone needs one once and a while.',
	args: true,
	usage: '<target>',
	aliases: ['cuddle', 'squeeze'],
	cooldown:2,
	execute(msg) {
		var member = msg.mentions.members.first();
    	if (member==undefined) return msg.channel.send("Please mentions a valid user")
    	return msg.channel.send(msg.author.username + " Hugs " + member + " 🤗");
	}
};