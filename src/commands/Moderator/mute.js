const ez = require("../../ez.js")
module.exports = {
	name: 'mute',
	description: 'mute someone, a  moderator command',
	args: true,
	usage: '<target>',
	poke: true,
	cooldown: 5,
	admin: true,
	dev: true,
	aliases: ['whois', 'find'],
	execute(msg, args, pokemon, data, client) {
		let tomute = getmember(args[0])
		if (!tomute) return msg.reply("Couldn't find user.");
		if (tomute.hasPermission("MANAGE_MESSAGES")) return msg.reply("I cannot mute that person");
		let muterole = msg.guild.roles.find(`name`, "muted");
		if (!muterole) {
			try {
				msg.guild.createRole({
					name: "muted",
					color: "#000000",
					permissions: []
				}).then(muterole=>{
				msg.guild.channels.forEach(async (channel, id) => {
					await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
				});
			});
			} catch (e) {
				console.log(e.stack);
			}
		}

		await (tomute.addRole(muterole.id));
		msg.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
	}
};