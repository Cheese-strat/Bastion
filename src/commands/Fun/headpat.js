const ez = require("../../ez.js")
module.exports = {
	name: 'headpat',
	description: 'Pats the target on the head',
	args: true,
	usage: '<target>',
	cooldown:2,
	aliases: ['rub', 'pat'],
	execute(msg, args) {
		var member = ez.getmember(msg.guild,args.join(" "))
    	if (!member) return msg.channel.send("Please mentions a valid user")
    	return msg.channel.send(`${msg.author.username} pats ${member.toString()} on the head <:pat:671676931623878677>`);
	}
};