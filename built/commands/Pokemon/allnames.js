var findpokemon = require("../../ez.js").findpokemon;
module.exports = {
    name: 'allnames',
    description: 'Finds all the names for the specified pokemon.',
    args: true,
    usage: '<pokemon>',
    poke: true,
    aliases: ["names", "pokenames"],
    cooldown: 3,
    execute: function (msg, args, pokemon) {
        var poke = findpokemon(args.join(" "));
        if (poke == undefined || pokemon[poke] == undefined)
            return msg.channel.send("I could not find that pokemon");
        return msg.channel.send({
            embed: {
                color: 0x0099ff,
                title: poke + "'s names are:",
                /*
                thumbnail: {
                    url: pokemon[poke].image,
                },*/
                fields: [{
                        name: 'English: ',
                        value: pokemon[poke].altname1,
                    },
                    {
                        name: 'German: ',
                        value: pokemon[poke].altname2,
                    },
                    {
                        name: 'French: ',
                        value: pokemon[poke].altname3,
                    },
                    {
                        name: 'Japanese: ',
                        value: pokemon[poke].altname4,
                    },
                ]
            }
        });
    }
};
