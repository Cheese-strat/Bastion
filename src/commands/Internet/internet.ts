import { Command, clientClass, MessageTYPE, CMDPermsObj } from "../../structures/library";
import fetch from "node-fetch"
import { MessageEmbed } from "discord.js";

export default class extends Command {
	name = "internet"
	description = "Searches the internet for an image"
	category = "";
	args = {
		required: true,
		case: false,
		usage: "<category to search for>"
	};
	cooldown = 5
	aliases = ["google"];
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
	async run(_client: clientClass, msg: MessageTYPE) {
		const Arguments = msg.args.join(" ");
		const Embed = new MessageEmbed();
		Embed.setColor("GREEN")
		const obj = {
			fox: {
				link: "https://randomfox.ca/floof/",
				title: "Foxes are cute",
				extra: "image"
			},
			cat: {
				link: "https://aws.random.cat/meow",
				title: "Cats be cute",
				extra: "file"
			},
			dog: {
				link: "https://random.dog/woof.json",
				title: "Best dogs around",
				extra: "url"
			},
			chuck: {
				link: "https://api.chucknorris.io/jokes/random",
				title: "Chuck Norris!",
				extra: "value"
			}
		}
		for (const [key, value] of Object.entries(obj)) {
			if (!Arguments.includes(key)) continue;
			const web = await fetch(value.link).then(response => response.json())
			if (!web) return msg.channel.send(`Something went wrong.`);
			Embed.setTitle(value.title)
				.setImage(web[value.extra])
			return msg.channel.send(Embed);
		}
		const embed = Embed.setTitle("User: wants something else\nMe:")
		embed.setImage("https://i.imgur.com/p4VJHkd.png")
		embed.setFooter("pick from one of the categories: cats, dogs, foxes ||or chuck norris!||")
		return msg.channel.send(embed)

	}
}