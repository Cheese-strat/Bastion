const ez = require("../../ez.js")
const fetch = require('node-fetch');
const querystring = require('querystring');
module.exports = {
	name: 'urban',
	description: 'search the urban dictionary for a word',
	cat: "misc",
	args: true,
	usage: '<word to search>',
	cooldown: 5,
	aliases: ['whois', 'find'],
	async execute(msg, args, pokemon, data, client) {
		const query = querystring.stringify({
			term: args.join(' ')
		});
		const {
			list
		} = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json())
		if (!list.length) {
			return msg.channel.send(`No results found for **${args.join(' ')}**.`);
		}
		const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;
		const [answer] = list;
		const embed = ez.embed('#EFFF00', answer.word)
			.setURL(answer.permalink)
			.addField('Definition', trim(answer.definition, 1024))
			.addField('Example', trim(answer.example, 1024))
			.addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);
		msg.channel.send(embed);
	}
};