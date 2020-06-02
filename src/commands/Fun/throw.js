const {getmember} = require("../../ez.js")
module.exports = {
	name: 'throw',
	description: 'Throws someone against the wall, for when they start insulting you.',
	args: true,
	cooldown:3,
	usage: '<target>',
	aliases: ['yeet', 'hurl'],
	execute(msg) {
		getmember(msg.guild, args.join(" "))
    	if (member==undefined) return msg.channel.send("Please mentions a valid user")
    	return msg.channel.send(`${msg.author.username} throws ${member} against the wall`);
	}
};