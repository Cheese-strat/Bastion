module.exports = {
	name: 'call',
	description: 'An undertale reference',
	args: false,
	cooldown: 10,
	execute(msg,args) {
		
			msg.channel.send("You called for help").then(message => {
				setTimeout(() => message.edit("You called for help."), 1000)
				setTimeout(() => message.edit("You called for help.."), 2000)
				setTimeout(() => message.edit("You called for help..."), 3000)
			});
		return
			msg.channel.send("You called for help").then(async message => {
				const filter = response => {
					return response.content.toLowerCase().includes("hi") //&& (response.author.id != msg.author.id) )
				};
				const collector = msg.channel.createMessageCollector(filter, {
					time: 10000,
					errors: ['time']
				})
				collector.on('collect', m => {
					msg.channel.send(`${m.author} heeded ${msg.author}'s call for help!`);
				});
				collector.on('end', c => {
					if (c.size < 1) return msg.channel.send("But nobody came");
				});
			});
		
	}
};