//const {correct} = require("../../ez.js")
module.exports = {
    name: 'reload',
    description: 'Reloads a command, developers only.',
    args: true,
    usage: '<command name>',
    cooldown: 3,
    dev: 2,
    execute: function (msg, args) {
        var commandName = args[0].toLowerCase();
        var command = msg.client.commands.get(commandName) || msg.client.commands.find(function (cmd) { return cmd.aliases && cmd.aliases.includes(commandName); });
        if (!command) {
            var correct_1 = 1; //correct(commandName, msg.client.commands.map(comm => [comm.name].concat(comm.aliases || [])));
            if (correct_1) {
                var command_1 = msg.client.commands.get(correct_1) || msg.client.commands.find(function (cmd) { return cmd.aliases && cmd.aliases.includes(correct_1); });
                return msg.channel.send("There is no command with name or alias `" + commandName + "`\nDid you mean `" + command_1.name + "`?");
            }
            return msg.channel.send("There is no command with name or alias `" + commandName + "`, " + msg.author + "!");
        }
        delete require.cache[require.resolve("../../commands/" + command.category + "/" + command.name + ".js")];
        try {
            var newCommand = require("../../commands/" + command.category + "/" + command.name + ".js");
            msg.client.commands.set(newCommand.name, newCommand);
        }
        catch (error) {
            console.log(error);
            msg.channel.send("There was an error while reloading a command `" + command.name + "`:\n`" + error.msg + "`");
        }
        return msg.channel.send("The `" + command.name + "` Command was reloaded!");
    }
};
