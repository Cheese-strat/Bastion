const ez = require("../../ez.js")
module.exports = {
	name: 'invite',
	description: 'Gives you the link of the official server and the bots invite link',
	args: false,
	cooldown:3,
	execute(msg) {
		const Embed = ez.embed(3447003,"Bot invite link")
		Embed.setURL(`https://discordapp.com/api/oauth2/authorize?client_id=628443772593635328&permissions=8&scope=bot`)
		Embed.setDescription("Official server invite link: \n https://discord.gg/gTYBdet")
		return msg.channel.send(Embed);
	}
};
