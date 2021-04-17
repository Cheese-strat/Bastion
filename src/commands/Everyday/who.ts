import { MessageEmbed, User } from "discord.js";
import { Command, clientClass, MessageTYPE } from "../../structures/library";
import DoggoEmbed from "../../structures/client/Embed";

export default (client: clientClass) =>
	new Command(
		client,
		{
			cmdName: "who",
			description: "Finds all the information about a certain user",
			category: "",
			args: {
				required: true,
				case: false,
				usage: "<target user>",
			},
			cooldown: 3,
			aliases: ["whois", "find", "search", "finduser"],
			permissions: {
				send: true,
				embed: true,
				react: false,
				delete: false,
				bot: [],
				auth: [],
			},
		},
		async function run(client: clientClass, msg: MessageTYPE) {
			const str = msg.args.join(" ");
			const member = await msg.guild.getMember(str);
			let user;
			if (member) {
				user = member.user;
			} else {
				user = await client.getUser(str);
				if (!user)
					return msg.channel.send("I could not find that user");
			}
			const Embed = new DoggoEmbed(
				member ? member.displayHexColor.slice(1) : "RANDOM",
			);
			const rego = `${user.createdAt.getUTCDate()}/${
				user.createdAt.getUTCMonth() + 1
			}/${user.createdAt.getUTCFullYear()}`;

			// only certain data can be obtained if they are/arent in the server

			Embed.setFields([
				{
					name: "registered",
					value: `${rego}`,
					inline: true,
				},
			]);
			if (member) {
				Embed.setDescription(`Nickname: ${member.nickname}`);
				//Embed.addField('Joined on', `${join}`, true)
				//Embed.addField('join position', `${joinpos}`, true)
				Embed.embed.fields!.push({
					name: "roles",
					value: member.roles.cache.map(r => r.toString()).join("\n"),
					inline: true,
				});
			}

			//set properties of the embed out here because it doesnt matter if they are in the server or not
			Embed.setTitle(user.tag);
			Embed.setThumbnail(
				user.displayAvatarURL({ dynamic: true, format: "png" }),
			);
			Embed.setFooter(`ID: ${user.id}`);

			return msg.channel.send(Embed);
		},
	);
