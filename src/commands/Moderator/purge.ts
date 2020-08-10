import { TextChannel } from "discord.js";
import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
	name = "purge"
	description = "Clears the specified number of messages from the channel"
	category = "";
	args = {
		required: true,
		case: false,
		usage: "<number of msgs>"
	};
	cooldown = 5
	aliases = ["clear", "wipe", "clean", "delete"];
	permissions: CMDPermsObj = {
		send: true,
		embed: false,
		react: false,
		delete: true,
		bot: [],
		auth: []
	};
	constructor(path: string, client: clientClass) {
		super(path, client)
	}
	run(client: clientClass, msg: messageTYPE) {
		const deleteCount = Number(msg.args[0]);
		if (!deleteCount || deleteCount < 2 || deleteCount > 100) return msg.channel.send("Please provide a number between 2 and 100 for the number of messages to delete");
		let chan = msg.channel as TextChannel
		chan.bulkDelete(deleteCount).catch(error => msg.channel.send(`Couldn't delete messages because of: ${error}`));
	}
}