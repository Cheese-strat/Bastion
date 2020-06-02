module.exports = {
	name: 'roll',
	description: 'Rolls a dice of any number of sides and gives a randomized result',
	args: false,
	usage: '<number of sides>',
	cooldown:1,
	aliases: ['dice', 'die'],
	execute(msg, args) {
		if (args[0] == undefined) args[0] = 6;
		msg.channel.send("You rolled a " + (Math.floor(Math.random() * args[0]) + 1).toString());
	}
};