//const {correct} = require("../../ez.js")
module.exports = {
	name: 'reload',
	description: 'Reloads a command, developers only.',
	args: true,
	usage: '<command name>',
	cooldown: 3,
	dev: 2,
	execute(msg, args) {
		const commandName = args[0].toLowerCase();
		const command = msg.client.commands.get(commandName) || msg.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			let correct = 1//correct(commandName, msg.client.commands.map(comm => [comm.name].concat(comm.aliases || [])));
			if (correct) {
				const command = msg.client.commands.get(correct) || msg.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(correct));
				return msg.channel.send(`There is no command with name or alias \`${commandName}\`\nDid you mean \`${command.name}\`?`);
			}
			return msg.channel.send(`There is no command with name or alias \`${commandName}\`, ${msg.author}!`);
		}

		delete require.cache[require.resolve(`../../commands/${command.category}/${command.name}.js`)];
		try {
			const newCommand = require(`../../commands/${command.category}/${command.name}.js`);
			msg.client.commands.set(newCommand.name, newCommand);
		} catch (error) {
			console.log(error);
			msg.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.msg}\``);
		}
		return msg.channel.send(`The \`${command.name}\` Command was reloaded!`);
	}
};
