module.exports = {
	name: 'levelup',
	description: 'Tells you the correct method for leveling up certain pokemon',
	args: true,
	usage: '<pokemon>',
	poke: true,
	cooldown: 3,
	aliases: ['level', 'leveling', 'levels'],
	execute(msg, args, pokemon) {
		var poke = args[0];
		msg.channel.send(pokemon[poke].leveling);
	}
};