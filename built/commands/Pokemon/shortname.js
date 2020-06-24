module.exports = {
    name: 'shortname',
    description: 'Finds the shortest name for the specified pokemon.',
    args: true,
    usage: '<pokemon>',
    poke: true,
    aliases: ['short'],
    cooldown: 3,
    execute: function (msg, args, pokemon) {
        var poke = ez.findpokemon(args.join(" "));
        if (poke === "muk")
            return msg.channel.send(poke + "'s shortest name is: *Grotadmorv*");
        if (poke == undefined)
            return msg.channel.send(poke + " does not have a shorter name");
        var names = new Array;
        names.push(pokemon[poke].altname1);
        names.push(pokemon[poke].altname2);
        names.push(pokemon[poke].altname3);
        names.push(pokemon[poke].altname4);
        if (names.length < 0.9)
            return msg.channel.send("Error: something went wrong");
        names = names.sort(function (a, b) { return a.length - b.length; });
        var difference = (poke.length - names[0].length);
        if (names[0].length != names[1].length)
            return msg.channel.send(poke + "'s shortest name is: " + names[0] + "\nwith a difference of: -" + difference);
        if (names[0].length != names[2].length)
            return msg.channel.send(poke + "'s shortest names are: " + names[0] + " and " + names[1] + " \nwith a difference of: -" + difference);
        if (names[0].length != names[3].length)
            return msg.channel.send(poke + "'s shortest names are: " + names[0] + ", " + names[1] + " and " + names[2] + " \nwith a difference of: -" + difference);
        return msg.channel.send(poke + "'s shortest names are: " + names[0] + ", " + names[1] + ", " + names[2] + " and " + names[3] + " \nwith a difference of: -" + difference);
    }
};
