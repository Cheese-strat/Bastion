import { Command, MessageTYPE, clientClass } from "../../structures/library";
import { Collection, MessageEmbed } from "discord.js";

export default (client: clientClass) =>
	new Command(
		client,
		{
			cmdName: "help",
			description:
				"List all of my commands or info about a specific command.",
			args: {
				required: false,
				case: false,
				usage: "<command name>",
			},
			cooldown: 5,
			aliases: ["commands", "h"],
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
			msg.args.join(" ");
			let prefix = "b!";

			const commands: Collection<string, Command> = client.commands;
			const embed = new MessageEmbed()
				.setAuthor(
					`${client.user!.username} Help Menu`,
					client.user!.displayAvatarURL({
						format: "png",
						dynamic: true,
					}),
				)
				.setDescription(`Prefix for this Server: \`${prefix}\``)
				.setFooter(
					`Powered By ${client.user!.username}`,
					client.user!.displayAvatarURL({
						format: "png",
						dynamic: true,
					}),
				)
				.setTimestamp()
				.setColor("BLUE");

			if (!msg.args[0]) {
				const filteredCategories = client.commands
					.filter(cmd => cmd.category === "Developer")
					.map(cmd => cmd.category)
					.sort();
				const commandCategories = [...new Set(filteredCategories)];

				for (const commandCategory of commandCategories) {
					embed.addField(
						`» **${commandCategory}**`,
						client.commands
							.filter(cmd => cmd.category === commandCategory)
							.map(cmd => `\`${cmd.cmdName}\``)
							.join(", "),
					);
				}

				return msg.channel.send(embed);
			} else {
				const command =
					client.commands.get(msg.args[0]) ||
					client.commands.find(cmd =>
						cmd.aliases.includes(msg.args[0]),
					);
				if (!command) return msg.channel.send("**Invalid Command!**");
				if (
					command.category === "Developer" &&
					!client.config.developers.includes(msg.author.id)
				)
					return msg.channel.send("**Invalid Command!**");

				/* const clientPermissions = command.permissions.bot
                    .map((x) => PermissionsMap[x])
                    .join(', ')
                const userPermissions = command.permissions.auth
                    .map((x) => PermissionsMap[x])
                    .join(', ') */

				embed
					.setAuthor(
						`${command.cmdName} Help`,
						client.user!.displayAvatarURL({
							format: "png",
							dynamic: true,
						}),
					)
					.setDescription([
						`Name: \`${command.cmdName}\``,
						`Category: \`${command.category}\``,
						`Cooldown: \`${command.cooldown} Seconds\``,
						`Description: \`${command.description}\``,
						`Usage: \`${prefix}${command.cmdName} ${command.args.usage}\``,
					]);

				return msg.channel.send(embed);
			}
		},
	);
