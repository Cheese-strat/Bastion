var Discord = require("discord.js");
module.exports = {
    name: __filename.slice(0, -3),
    description: 'Statistics and data about the bot',
    args: {
        required: false,
        case: false,
        usage: ""
    },
    cooldown: 3,
    aliases: ['bot', 'stats'],
    permissions: {
        bot: [
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "EMBED_LINKS",
        ],
        author: [
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "READ_MESSAGE_HISTORY"
        ],
        mentions: []
    },
    execute: function (msg, a, client) {
        var Embed = ez.embed(0xFF4500, "Statistics");
        Embed.addFields({
            name: "Memory usage",
            value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB",
        }, {
            name: 'Users',
            value: client.users.cache.size.toLocaleString(),
        }, {
            name: 'Channels',
            value: client.channels.cache.size.toLocaleString(),
        }, {
            name: 'Servers',
            value: client.guilds.cache.size.toLocaleString(),
        }, {
            name: 'Discord.js',
            value: Discord.version,
        }, {
            name: 'Node',
            value: process.version,
        });
        msg.channel.send(Embed);
    }
};
