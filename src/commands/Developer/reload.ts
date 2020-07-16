import { clientClass, CMDPermsObj, Command, messageTYPE } from "../../structures/library"
import { correct } from "../../structures/library"
export default class extends Command {
	name = 'reload'
	description = 'Reloads a command, developers only.'
	args = {
		required: true,
		case: false,
		usage: '<command name>'
	}
	cooldown = 3
	aliases: string[] = []
	permissions: CMDPermsObj = {
		send: false,
		embed: false,
		react: false,
		delete: false,
		bot: [],
		auth: []
	}
	constructor(path: string, client: clientClass) {
		super(path, client)
	}
	run(client: clientClass, msg: messageTYPE) {
		const commandName = msg.args[0].toLowerCase();
		const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			const arr: string[] = []
			client.commands.map(cmd => {
				arr.push(cmd.name)
				cmd.aliases && cmd.aliases.forEach(e => arr.push(e))
			})

			let corrected = correct(commandName, arr)

			if (corrected) {
				const command = client.commands.get(corrected) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(corrected));
				return msg.channel.send(`There is no command with name or alias \`${commandName}\`\nDid you mean \`${command.name}\`?`);
			}
			return msg.channel.send(`There is no command with name or alias \`${commandName}\`, ${msg.author}!`);
		}

		delete require.cache[require.resolve(`../../commands/${command.category}/${command.name}.js`)];
		try {
			const newCommand = require(`../../commands/${command.category}/${command.name}.js`);
			client.commands.set(newCommand.name, newCommand);
		} catch (error) {
			console.log(error);
			msg.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.msg}\``);
		}
		return msg.channel.send(`The \`${command.name}\` Command was reloaded!`);
	}
};
