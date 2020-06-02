const ez = require("../../ez.js")
const fetch = require("node-fetch")
module.exports = {
	name: 'joke',
	description: 'is the template to copy commands from, has all options enabled',
	cat: "misc",
	cooldown: 3,
	admin: false,
	dev: false,
	aliases: ['j', 'laugh'],
	async execute(msg, args, pokemon, data, client) {
		const web = await fetch("https://official-joke-api.appspot.com/jokes/general/ten").then(response => response.json())
		if (!web) return msg.channel.send(`Something went wrong.`);
		console.log(web)
		if (web[0].setup){
			msg.channel.send(web[0].setup)
			setTimeout(x=>{
				msg.channel.send(web[0].punchline)
			},(web[0].setup.length*100))
		}
	}
};