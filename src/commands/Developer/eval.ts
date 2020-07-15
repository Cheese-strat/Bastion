'use strict';
import { inspect } from "util";
import { transpile } from "typescript";
import { clientClass, CMDPermsObj, Command, messageTYPE } from "../../structures/library";

export default class extends Command {
	name = "eval"
	description = 'used to evaluate code, for instant code testing'
	args = {
		required: true,
		case: true,
		usage: '<code to evaluate>'
	}
	cooldown = 5
	aliases = ['evaluate', 'ev']
	permissions: CMDPermsObj = {
		send: false,
		embed: false,
		react: false,
		delete: false,
		bot: [],
		auth: []
	}
	constructor(path: string, client: clientClass) {
		super(path, client)
	}
	run(client: clientClass, msg: messageTYPE): any {
		if (msg.content.includes("client.token")) return msg.channel.send("you cannot get the token throught this eval command")
		if (msg.content.includes("fs")) return msg.channel.send("The fs module is disabled while this process not running through a virtual machine")
		function clean(text: any): string {
			if (typeof text === "string")
				return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)) as string;
			return (typeof text === "string") ? text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)) : text
		}
		try {
			const code = msg.args.join(" ");
			let js = transpile(code)
			let evaled = eval(js);

			if (typeof evaled !== "string") evaled = inspect(evaled);
			let send = clean(evaled)
			if (send.includes(client.token)) return msg.channel.send("you cannot get the token throught this eval command")
			if (send.length > 2000) return msg.channel.send(`The result was ${send.length - 2000} characters to long\n\`\`\`js\n${send.substring(0, 1900)}\`\`\``)
			msg.channel.send(send, {
				code: "js"
			});
		} catch (err: any) {
			msg.channel.send(`\`${clean(err)}\``);
		}
	}
};