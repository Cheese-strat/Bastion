import { Command, clientClass, MessageTYPE } from "../../structures/library";

export default (client: clientClass) =>
	new Command(
		client,
		{
			cmdName: "prefix",
			description: "Changes the prefix for your server",
			category: "",
			args: {
				required: true,
				case: true,
				usage: "<prefix>",
			},
			cooldown: 2,
			aliases: [],
			permissions: {
				send: true,
				embed: true,
				react: false,
				delete: false,
				bot: [],
				auth: [],
			},
		},
		function run(client: clientClass, msg: MessageTYPE) {
			const guildData = client.DB(msg.guild.id);
			if (msg.args[0] === "reset") {
				guildData.prefix = client.config.prefix;
				msg.channel.send(
					`Your prefix has been reset and is now: ${guildData.prefix}`,
				);
			} else {
				guildData.prefix = msg.args[0];
				msg.channel.send(`Your prefix is now: ${guildData.prefix}`);
			}
			client.DB(msg.guild.id, guildData);
		},
	);
