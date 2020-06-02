module.exports = {
	name: 'ping',
	description: 'Pings the bot and the discord API to test reaction time and latency',
	args: false,
	cooldown:2,
	execute(msg, args, pokemon, data, client) {
		msg.channel.send("Ping!").then(m => {
            		m.edit('Pong! Latency is '+ (m.createdTimestamp - msg.createdTimestamp) + 'ms. API Latency is ' + Math.round(client.ws.ping) + 'ms');
          	});
	},
};
