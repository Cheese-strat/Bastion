const ez = require("../../ez.js")
module.exports = {
	name: 'daycarecalc',
	description: 'Calculates the cost of daycaring a pokemon',
	args: true,
	usage: '<pokemon> <starting level> <end level>',
	cooldown:3,
	poke: true,
	aliases: ['calc', 'daycare'],
	execute(msg, args, pokemon) {
		var name = ez.findpokemon(args[0])
		var startlvl = Number(args[1]);
		var endlvl = Number(args[2]);
		var speed = Number(pokemon[name].daycare);
		if (startlvl < 4) {
		  var endcost = Math.floor(speed * endlvl ** (1.5 + speed - 1));
		  return msg.channel.send("Your final result is: " + endcost + "c");
		} else {
		  var endcost = speed * endlvl ** (1.5 + speed - 1);
		  var startcost = speed * startlvl ** (1.5 + speed - 1);
		  var cost = Math.floor(endcost - startcost);
		  return msg.channel.send("Your final result is: " + cost + "c");
		}
	}
};