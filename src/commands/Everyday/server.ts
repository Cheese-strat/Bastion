import { MessageEmbed } from "discord.js";
import { Command, clientClass, MessageTYPE } from "../../structures/library";

export default (client: clientClass) =>
	new Command(
		client,
		{
			cmdName: "server",
			description: "Has useful information about the server",
			category: "",
			args: {
				required: false,
				case: false,
				usage: "",
			},
			cooldown: 3,
			aliases: [
				"server-info",
				"guild",
				"guild-data",
				"guild-info",
				"server-data",
			],
			permissions: {
				send: true,
				embed: true,
				react: false,
				delete: false,
				bot: [],
				auth: [],
			},
		},
		async function run(_client: clientClass, msg: MessageTYPE) {
			const guild = await msg.guild.fetch();
			const guildcreationdate = `${guild.createdAt.getDate()}/${guild.createdAt.getMonth()}/${guild.createdAt.getFullYear()}`;
			const { user } = await guild.members.fetch(guild.ownerID);
			const Embed = new MessageEmbed()
				.setColor(0x0099ff)
				.setTitle(guild.name)
				.addFields(
					{
						name: "Amount of humans:",
						value: guild.members.cache.filter(m => !m.user.bot)
							.size,
						inline: true,
					},
					{
						name: "Number of bots:",
						value: guild.members.cache.filter(m => m.user.bot).size,
						inline: true,
					},
					{
						name: "Number of roles:",
						value: guild.roles.cache.size,
						inline: true,
					},
					{
						name: `Number of channels`,
						value: guild.channels.cache.size,
						inline: true,
					},
					{ name: "Owner: ", value: user.tag, inline: true },
					{
						name: `Server creation date:`,
						value: guildcreationdate,
						inline: true,
					},
				)
				.setFooter(`Server id: ${msg.guild.id}`);
			if (typeof guild.iconURL() === "string")
				Embed.setThumbnail(
					guild.iconURL({ dynamic: true, format: "png" })!,
				);
			return msg.channel.send(Embed);
		},
	);
