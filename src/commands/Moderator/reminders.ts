import { Command, clientClass, messageTYPE, CMDPermsObj, reminderTYPE, storageGuildTYPE } from "../../structures/library";

export default class extends Command {
	name = "reminders"
	description = "see all of your reminders"
	category = "";
	args = {
		required: false,
		case: false,
		usage: ""
	};
	cooldown = 3
	aliases = [];
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
	run(client: clientClass, msg: messageTYPE) {
		const { reminders, prefix } = client.DB(msg.guild.id) as storageGuildTYPE
		if (!reminders || reminders.length < 1) return msg.channel.send("You have no reminders set for this server!")
		msg.channel.send({
			embed: {
				color: 0x866b6d,
				title: 'Your reminders',
				description: `you can add a new reminder with: ${prefix}reminder`,
				fields: reminders.map(function (reminder) { return { name: 'target id: ' + reminder.target, value: `message: ${reminder.message}`, inline: true } })
			}
		});
	}
}