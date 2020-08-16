import { Command, clientClass, messageTYPE, CMDPermsObj, storageGuildTYPE } from "../../structures/library";

export default class extends Command {
	name = "unban"
	description = "Removes this word from this servers banned words"
	category = "";
	args = {
		required: true,
		case: false,
		usage: "<word>"
	};
	cooldown = 5
	aliases = [];
	permissions: CMDPermsObj = {
		send: true,
		embed: false,
		react: false,
		delete: false,
		bot: [],
		auth: ["ADMINISTRATOR"]
	};
	constructor(path: string, client: clientClass) {
		super(path, client)
	}
	run(client: clientClass, msg: messageTYPE) {
		const guildData = client.DB(msg.guild.id)
		if (!guildData.banwords.includes(msg.args[0])) return msg.channel.send(`${msg.args[0]} is not one of this servers banned words` + guildData.banwords.length ? `\nThe banned words are: ${guildData.banwords.join(", ")}` : "")
		const res = guildData.banwords.filter(x=>x!==msg.args[0])
		client.DB(msg.guild.id, guildData)
		return msg.channel.send(`I have removed \`${msg.args[0]}\` from this servers list of banned words`)
	}
}