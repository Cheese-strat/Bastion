const {findpokemon}= require("../../ez.js")
module.exports = {
	name: 'info',
	description: 'Shows you the data and information about the pokemon.',
	args: true,
  usage: '<pokemon>',
  poke: true,
  aliases: ['pokemon', 'poke', 'information'],
  cooldown:3,
	execute(msg, args, pokemon) {
    var poke = findpokemon(args[0])
    if(poke == undefined)return msg.channel.send("I could not find that pokemon!")
        if (pokemon[poke].type2 === "NULL") {
          var Type = pokemon[poke].type1
        } else {
          var Type = pokemon[poke].type1 + " / " + pokemon[poke].type2
        }
        var moveset = pokemon[poke].move1+", "+pokemon[poke].move2+", "+pokemon[poke].move3+" and "+ pokemon[poke].move4
        var names = pokemon[poke].altname1+", "+pokemon[poke].altname2+", "+pokemon[poke].altname3+" and "+ pokemon[poke].altname4
        const Embed = {
          color: 0x00ae86,
          title: poke,
          description: "If some data is incorrect, please dm Cheese_strat#0527",
          fields: [{
              name: "Type: ",
              value: Type
            },
            {
              name: "Moveset: ",
              value: moveset
            },
            {
              name: "Names: ",
              value: names
            },
          ],
          timestamp: new Date(),
          image: {
            url: pokemon[poke].image,
          },
        };
        return msg.channel.send({
          embed: Embed
        });
	}
};