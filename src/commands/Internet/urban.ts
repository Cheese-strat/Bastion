import querystring from "querystring";
import fetch from "node-fetch";
import { MessageEmbed } from "discord.js";
import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
	name = "urban";
	description = "search the urban dictionary for a word";
	category = "";
	args = {
		required: true,
		case: false,
		usage: "<word to serach>",
	};
	cooldown = 5;
	aliases = ["dictionary"];
	permissions: CMDPermsObj = {
		send: true,
		embed: true,
		react: false,
		delete: false,
		bot: [],
		auth: [],
	};
	constructor(path: string, client: clientClass) {
		super(path, client);
	}
	async run(_client: clientClass, msg: messageTYPE) {
		const query = querystring.stringify({
			term: msg.args.join(" "),
		});
		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
		if (!list.length) {
			return msg.channel.send(`No results found for **${msg.args.join(" ")}**.`);
		}
		const trim = function (str: string, max: number) {
			return str.length > max ? `${str.slice(0, max - 3)}...` : str;
		};
		const [answer] = list;
		const embed = new MessageEmbed()
			.setColor("#EFFF00")
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addField("Definition", trim(answer.definition, 1024))
			.addField("Example", trim(answer.example, 1024))
			.addField("Rating", `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);
		return await msg.channel.send(embed);
	}
}
