var ez = require("../../ez.js");
module.exports = {
    name: 'role',
    description: 'edit and view a role',
    cat: "misc",
    args: true,
    usage: '<view, edit, delete>',
    cooldown: 5,
    admin: true,
    aliases: ['r'],
    execute: function (msg, args, pokemon, data, client) {
        if (args.join(" ").includes("delete")) {
            msg.channel.send("enter the name of the role you would like to delete!");
            var filter = function (m) { return m.author.id === msg.author.id; };
            var collector = msg.channel.createMessageCollector(filter, {
                time: 15000
            });
            collector.on('collect', function (m) {
                var role = msg.guild.roles.find(function (x) { return x.name === m.content; });
                if (!role)
                    return msg.channel.send("i could not find that role");
                //role.delete().catch(console.error)
                msg.channel.send("Deleted role: " + role.name);
            });
            collector.on('end', function (collected) {
                if (collected.size < 1)
                    return msg.channel.send("You didnt enter a role!");
                msg.channel.send("" + collected.array().map(function (string) {
                    msg.guild.roles.find(function (x) {
                        return x.name === string;
                    });
                }).filter(function (x) {
                    x != undefined,
                        x != null;
                }).map(function (y) {
                    msg.guild.roles.find(function (z) {
                        return z.name === y;
                    });
                }).map(function (e) {
                    e.name;
                }).join(",\n"));
            });
        }
    }
};
