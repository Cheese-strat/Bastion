import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
	name = "kick"
	description = "Used to kick a user from a server"
	category = "";
	args = {
		required: true,
		case: true,
		usage: "<target>"
	};
	cooldown = 10
	aliases = [];
	permissions: CMDPermsObj = {
		send: true,
		embed: false,
		react: false,
		delete: false,
		bot: ["KICK_MEMBERS"],
		auth: ["KICK_MEMBERS"]
	};
	constructor(path: string, client: clientClass) {
		super(path, client)
	}
	async run(_client: clientClass, msg: messageTYPE) {
		const member = await msg.guild.getMember(msg.args.join(" "))
		if (!member) return msg.channel.send("Please mention a valid user")
		return await member.kick().then((member) => {
			return msg.channel.send(member.displayName + " has been successfully kicked :point_right: ");
		}).catch(() => {
			return msg.channel.send("You cannot kick this user");
		});
	}
}