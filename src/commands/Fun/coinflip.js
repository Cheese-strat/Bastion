module.exports = {
	name: 'coinflip',
	description: 'Randomly flips a coin for you',
	args: false,
	aliases: ['flip', 'coin'],
	cooldown: 3,
	execute(msg) {
		if (Math.random() > 0.5) return msg.channel.send("The coin landed on heads!");
		return msg.channel.send("The coin landed on tails!");
	}
};