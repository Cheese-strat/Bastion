import { Command, clientClass, MessageTYPE } from "../../structures/library";

export default (client: clientClass) =>
	new Command(
		client,
		{
			cmdName: "roll",
			description:
				"Rolls a dice of any number of sides and gives a randomized result",
			category: "",
			args: { required: false, case: false, usage: "<number of sides>" },
			cooldown: 1,
			aliases: ["dice", "die"],
			permissions: {
				send: true,
				embed: true,
				react: false,
				delete: false,
				bot: [],
				auth: [],
			},
		},

		function run(_client: clientClass, msg: MessageTYPE) {
			return msg.channel.send(
				"You rolled a " +
					(
						Math.floor(Math.random() * Number(msg.args[0]) || 6) + 1
					).toString(),
			);
		},
	);
