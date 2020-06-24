module.exports = {
    name: 'moveset',
    description: 'Finds the best possible moveset for the pokemon, these are configured to the pokecord bot',
    args: true,
    usage: '<pokemon>',
    cooldown: 3,
    poke: true,
    aliases: ['moves', 'move'],
    execute: function (msg, args, pokemon) {
        var poke = args[0];
        var Embed = {
            color: 0x00ae86,
            title: "Best Current Moveset",
            description: "If some movesets are wrong, please dm Cheese_strat#0527",
            fields: [{
                    name: pokemon[poke].move1,
                    value: pokemon[poke].move1reason
                },
                {
                    name: pokemon[poke].move2,
                    value: pokemon[poke].move2reason
                },
                {
                    name: pokemon[poke].move3,
                    value: pokemon[poke].move3reason
                },
                {
                    name: pokemon[poke].move4,
                    value: pokemon[poke].move4reason
                }
            ],
            timestamp: new Date()
        };
        msg.channel.send({ embed: Embed });
    }
};
