'use strict';
module.exports = {
	name: __filename.slice(0, -3),
	description: 'used to evaluate code, for instant code testing',
	args: {
		required: true,
		case: true,
		usage: '<code to evaluate>'
	},
	cooldown: 5,
	aliases: ['evaluate', 'ev'],
	permissions: {
		bot: [],
		author: [],
		mentions: []
	},
	execute(msg, args, client) {
		if (msg.content.includes("client.token")) return msg.channel.send("you cannot get the token throught this eval command")
		if (msg.content.includes("fs")) return msg.channel.send("The fs module is disabled while this process not running through a virtual machine")
		const clean = text => {
			if (typeof (text) === "string")
				return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
			else
				return text;
		}
		try {
			const code = args.join(" ");
			let evaled = eval(code);

			if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
			let send = clean(evaled)
			console.log(send.length)
			if (send.includes(client.token)) return msg.channel.send("you cannot get the token throught this eval command")
			if (send.length > 2000) return msg.channel.send(`The result was ${send.length - 2000} characters to long\n\`\`\`js\n${send.substring(0, 1900)}\`\`\``)
			msg.channel.send(send, {
				code: "xl"
			});
		} catch (err) {
			msg.channel.send(`\`${clean(err)}\``);
		}
	}
};