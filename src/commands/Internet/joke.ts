import fetch from "node-fetch";
import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "joke"
    description = "gets a funny joke"
    category = "";
    args = {
        required: false,
        case: false,
        usage: ""
    };
    cooldown = 3
    aliases = ["j", "laugh"];
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
    async run(client: clientClass, msg: messageTYPE) {
		const [res] = await fetch("https://official-joke-api.appspot.com/jokes/general/ten").then(response => response.json())
		if (!res) return msg.channel.send(`Something went wrong.`);
		if (res.setup){
			await msg.channel.send(res.setup)
			setTimeout(x=>{
				msg.channel.send(res.punchline)
			},res.setup.length*100)
		}
    }
}