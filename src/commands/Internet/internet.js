const ez = require("../../ez.js")
const fetch = require("node-fetch")
module.exports = {
	name: 'internet',
	description: 'is the template to copy commands from, has all options enabled',
	cat: "misc",
	args: true,
	usage: '<category>',
	cooldown: 5,
	async execute(msg, args, pokemon, data, client) {
		const Arguments = args.join(" ")
		if (Arguments.includes("fox")) {
			const web = await fetch("https://randomfox.ca/floof/").then(response => response.json())
			if (!web) return msg.channel.send(`Something went wrong.`);
			const embed = ez.embed('#EFFF00', "Foxes are cute")
			embed.setImage(web.image)
			return msg.channel.send(embed);
		}
		if (Arguments.includes("cat")) {
			const web = await fetch("https://aws.random.cat/meow").then(response => response.json())
			if (!web) return msg.channel.send(`Something went wrong.`);
			const embed = ez.embed('#EFFF00', "Cats cute")
			embed.setImage(web.file)
			return msg.channel.send(embed);
		}
		if (Arguments.includes("dog")) {
			const web = await fetch("https://random.dog/woof.json").then(response => response.json())
			if (!web) return msg.channel.send(`Something went wrong.`);
			const embed = ez.embed('#EFFF00', "Best dogs around")
			embed.setImage(web.url)
			return msg.channel.send(embed);
		}
		if (Arguments.includes("chuck") || Arguments.includes("norris")) {
			const web = await fetch("https://api.chucknorris.io/jokes/random").then(response => response.json())
			if (!web) return msg.channel.send(`Something went wrong.`);
			const embed = ez.embed('#EFFF00', "Chuck Norris!")
			embed.setDescription(web.value)
			return msg.channel.send(embed);
		}
		const embed = ez.embed('#EFFF00', "User: wants something else\nMe:")
		embed.setImage("https://i.imgur.com/p4VJHkd.png")
		embed.setFooter("pick from one of the categories: cats, dogs or foxes")
		return msg.channel.send(embed)

	}
};