import fetch from "node-fetch";
import { Command, clientClass, MessageTYPE } from "../../structures/library";

export default (client: clientClass) =>
	new Command(
		client,
		{
			cmdName: "joke",
			description: "gets a funny joke",
			category: "",
			args: {
				required: false,
				case: false,
				usage: "",
			},
			cooldown: 3,
			aliases: ["j", "laugh"],
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
			const [res]: [joke] = await fetch(
				"https://official-joke-api.appspot.com/jokes/random",
			).then(r => r.json());
			if (!res) return msg.channel.send(`Something went wrong.`);
			await msg.channel.send(res.setup);
			return setTimeout(() => {
				return msg.channel.send(res.punchline);
			}, res.setup.length * 100);
		},
	);
interface joke {
	id: number;
	type: string;
	setup: string;
	punchline: string;
}
