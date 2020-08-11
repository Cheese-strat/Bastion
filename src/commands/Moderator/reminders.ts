module.exports = {
	name: 'reminders',
	description: 'see all your reminders',
	cooldown: 3,
	args: false,
	admin:true,
	execute(msg, args, pokemon, data, client) {
		if (client.DB()[msg.guild.id].reminders.length < 1) return msg.channel.send("You have no reminders set for this server!")
		const Embed = {
			color: 0x866b6d,
			title: 'Your reminders',
			description: `you can add a new reminder with: ${data[msg.guild.id].prefix}reminder`,
			fields: [],
		};
		data[msg.guild.id].reminders.forEach(reminder => {
			Embed.fields.push({
				name: 'target id: ' + reminder.target,
				value: `message: ${reminder.message}`/*\nTime: ${reminder.time}`*/,
				inline:true,
			})
		});
		msg.channel.send({
			embed: Embed
		});
	}
};
import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

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
    run(client: clientClass, msg: messageTYPE) {
		const data = client.DB(null)[msg.guild.id]
		if (!data)
		if (client.DB(null)[msg.guild.id].reminders.length < 1) return msg.channel.send("You have no reminders set for this server!")
		const Embed = {
			color: 0x866b6d,
			title: 'Your reminders',
			description: `you can add a new reminder with: ${data[msg.guild.id].prefix}reminder`,
			fields: [],
		};
		data[msg.guild.id].reminders.forEach(reminder => {
			Embed.fields.push({
				name: 'target id: ' + reminder.target,
				value: `message: ${reminder.message}`/*\nTime: ${reminder.time}`*/,
				inline:true,
			})
		});
		msg.channel.send({
			embed: Embed
		});
    }
}