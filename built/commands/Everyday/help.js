var ez = require("../../ez.js");
var fs = require("fs");
module.exports = {
    usage: '<command name>',
    aliases: ['commands', "h"],
    cooldown: 5,
    name: __filename.slice(0, -3),
    description: 'List all of my commands or info about a specific command.',
    args: {
        required: false,
        case: false,
        usage: '<command name>'
    },
    cooldown: 5,
    aliases: ['commands', "h"],
    permissions: {
        bot: [
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "EMBED_LINKS",
        ],
        author: [
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
        ],
        mentions: []
    },
    execute: function (msg, args, client) {
        args.join(" ");
        var prefix = data[msg.guild.id].prefix;
        data = [];
        var commands = msg.client.commands;
        if (!args.length) {
            //const embed = ez.embed(msg.member.displayHexColor, "My commands:")
            /*for (const commFolder of fs.readdirSync("./commands")) {
                console.log(commFolder)
                let info = JSON.parse(fs.readFileSync(`./commands/${commFolder}/info.json`))
                embed.addField(commFolder, info.desc)
            }*/
            //embed.setDescription(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
            //embed.addField(`Here\'s a list of all my commands:${commands.map(command => command.name).join(', ')}\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
            return msg.author.send("**My Commands:** \nYou can send `" + prefix + "help [command name]` to get info on a specific command!mHere's a list of all my commands:" + commands.map(function (command) { return command.name; }).join('\n') + "\nYou can send `" + prefix + "help [command name]` to get info on a specific command!")
                .then(function () {
                msg.reply("I've sent you a DM!");
            })
                .catch(function (error) {
                msg.client.channels.cache.get("629683449976061971").send("Could not send help DM to " + msg.author.tag + ".\n", error);
                console.log(error);
                msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
            });
        }
        if (isNaN(Number(args))) {
            var name_1 = args[0].toLowerCase();
            var command = commands.get(name_1) || commands.find(function (c) { return c.aliases && c.aliases.includes(name_1); });
            if (!command)
                return msg.reply('that\'s not a valid command!');
            var exampleEmbed_1 = ez.embed('#0099ff', 'Some title')
                .setDescription('Some description here')
                .setThumbnail('https://i.imgur.com/wSTFkRM.png')
                .setImage('https://i.imgur.com/wSTFkRM.png')
                .setTimestamp()
                .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
            var categories = commands.map(function (c) { return c.category; }).filter(function (category) { return commands.map(function (c) { return c.category; }).filter(function (cat) { return cat === category; }).length === 1; });
            for (x = 0; x > categories.length; x++) {
                exampleEmbed_1.addField("Page: " + x, categories[x] + " commands");
            }
            categories.forEach(function (category) {
                exampleEmbed_1.addField(category, 'Some value here');
            });
            /*
                        data.push(`**Name:** ${command.name}`);
                        if (command.cooldown === 1) {
                            var seconds = "second"
                        } else {
                            var seconds = "seconds"
                        }
                        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
                        if (command.description) data.push(`**Description:** ${command.description}`);
                        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
                        if (command.cooldown != undefined) data.push(`**Cooldown:** ${command.cooldown || 3} ${seconds}`);
            */
            return msg.channel.send(exampleEmbed_1);
        }
    }
};
