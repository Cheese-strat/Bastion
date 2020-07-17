const ez = require("../../ez.js")
const fetch = require("node-fetch")
module.exports = {
	name: 'ageify',
	description: 'I can guess how old someone is based on their name',
	cat: "misc",
	args: true,
	usage: '<name>',
	cooldown: 3,
	aliases: ['age',"age-test","agetest", 'oldie',"boomer-test", "boomerness"],
	async execute(msg, args, pokemon, data, client) {
		const web = await fetch(`https://api.agify.io?name=${args[0]}`).then(response => response.json())
		var colour = [0, 0, 255]
		if (web.age>10){
			colour = [26, 0, 229]
		}
		if (web.age>20){
			colour = [51, 0, 204]
		}
		if (web.age>30){
			colour = [78, 0, 178]
		}
		if (web.age>40){
			colour = [102, 0, 153]
		}
		if (web.age>50){
			colour = [128, 1, 128]
		}
		if (web.age>60){
			colour = [153, 1, 102]
		}
		if (web.age>70){
			colour = [178, 1, 77]
		}
		if (web.age>80){
			colour = [204, 1, 51]
		}
		if (web.age>90){
			colour = [229, 1, 26]
		}
		if (web.age>100){
			colour = [255, 1, 0]
		}
		const embed = ez.embed(colour, "Boomer test!")
		embed.setDescription(`The predicted age for ${web.name} is ${web.age} years old.`)
		embed.setFooter(`This result was taken from ${web.count} different counts`)
		await msg.channel.send(embed)
		return
	}
};