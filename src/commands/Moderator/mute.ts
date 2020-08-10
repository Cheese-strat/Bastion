import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";
import getDate from "../../structures/util/getDate"
export default class extends Command {
	name = "mute";
	description = "Mute someone, a moderator commands"
	category = "";
	args = {
		required: true,
		case: false,
		usage: "<target>"
	};
	cooldown = 5
	aliases = ["adwoiajdoaj"];
	permissions: CMDPermsObj = {
		send: true,
		embed: true,
		react: false,
		delete: false,
		bot: [],
		auth: []
	};
	constructor(path: string, client: clientClass) {
		super(path, client)
	}
	async run(client: clientClass, msg: messageTYPE) {
		let tomute = await msg.guild.getMember(msg.args.shift())
		if (!tomute) return msg.reply("Couldn't find user.");
		if (tomute.hasPermission("MANAGE_MESSAGES")) return msg.reply("I cannot mute that person");
		let muterole = msg.guild.roles.cache.find(role => role.name === "muted");
		if (!muterole) {
			msg.guild.roles.create({
				data: {
					name: "muted",
					color: "#000000"
				}
			}).then(muterole => {
				msg.guild.channels.cache.forEach(async (channel) => {
					await channel.overwritePermissions([{
						deny: ["SEND_MESSAGES", "ADD_REACTIONS"],
						id: muterole.id,
					}]);
				});
			}).catch(console.log)
		}
		await (tomute.roles.add(muterole.id));
		msg.reply(`<@${tomute.id}> has been muted for ${getDate(msg.args.join(" "))}`);
	}
}