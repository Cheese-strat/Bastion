import { TextChannel } from "discord.js";
import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
	name = "purge"
	description = "Clears the specified number of messages from the channel"
	category = "";
	args = {
		required: true,
		case: false,
		usage: "<number of msgs> [reason]"
	};
	cooldown = 5
	aliases = ["clear", "wipe", "clean", "delete"];
	permissions: CMDPermsObj = {
		send: true,
		embed: false,
		react: false,
		delete: true,
		bot: [],
		auth: ["MANAGE_CHANNELS"]
	};
	constructor(path: string, client: clientClass) {
		super(path, client)
	}
	async run(_client: clientClass, msg: messageTYPE) {
		const deleteCount = Number(msg.args[0]);
		if (!deleteCount) return msg.channel.send("Please provide a number")
		/* if (deleteCount < 2) {
			const msgs = await msg.channel.messages.fetch({limit:2})
			Promise.all(msgs.map(m => {
				m.delete({reason:msg.args[1]})
			}))
		}
		if (deleteCount > 2 && deleteCount < 100) {
			msg.channel.messages.fetch(deleteCount)
		}
		if (deleteCount > 100) {
			msg.channel.messages.fetch(deleteCount)
		}
		msg.channel.messages.fetch((deleteCount > 100) ? deleteCount : 100)
		if (deleteCount < 2) */
		if (deleteCount < 2 || deleteCount > 100) return msg.channel.send("Please provide a number between 2 and 100 for the number of messages to delete");
		let chan = msg.channel as TextChannel
		const msgs = await chan.messages.fetch({ limit: deleteCount })
		return await chan.bulkDelete(deleteCount).catch(error => msg.channel.send(`Couldn't delete messages because of: ${error}`));
	}
}