var update = require("../../ez.js").update;
var prefix = require("../../config.json").prefix;
module.exports = {
    name: __filename.slice(0, -3),
    description: "",
    args: {
        required: false,
        case: false,
        usage: ""
    },
    cooldown: 3,
    aliases: ["pong"],
    permissions: {
        bot: [
            "CREATE_INSTANT_INVITE",
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "MANAGE_CHANNELS",
            "MANAGE_GUILD",
            "ADD_REACTIONS",
            "VIEW_AUDIT_LOG",
            "PRIORITY_SPEAKER",
            "STREAM",
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "SEND_TTS_MESSAGES",
            "MANAGE_MESSAGES",
            "EMBED_LINKS",
            "ATTACH_FILES",
            "READ_MESSAGE_HISTORY",
            "MENTION_EVERYONE",
            "USE_EXTERNAL_EMOJIS",
            "VIEW_GUILD_INSIGHTS",
            "CONNECT",
            "SPEAK",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MOVE_MEMBERS",
            "USE_VAD",
            "CHANGE_NICKNAME",
            "MANAGE_NICKNAMES",
            "MANAGE_ROLES",
            "MANAGE_WEBHOOKS",
            "MANAGE_EMOJIS"
        ],
        author: [
            "CREATE_INSTANT_INVITE",
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "MANAGE_CHANNELS",
            "MANAGE_GUILD",
            "ADD_REACTIONS",
            "VIEW_AUDIT_LOG",
            "PRIORITY_SPEAKER",
            "STREAM",
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "SEND_TTS_MESSAGES",
            "MANAGE_MESSAGES",
            "EMBED_LINKS",
            "ATTACH_FILES",
            "READ_MESSAGE_HISTORY",
            "MENTION_EVERYONE",
            "USE_EXTERNAL_EMOJIS",
            "VIEW_GUILD_INSIGHTS",
            "CONNECT",
            "SPEAK",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MOVE_MEMBERS",
            "USE_VAD",
            "CHANGE_NICKNAME",
            "MANAGE_NICKNAMES",
            "MANAGE_ROLES",
            "MANAGE_WEBHOOKS",
            "MANAGE_EMOJIS"
        ],
        mentions: [
            "CREATE_INSTANT_INVITE",
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "MANAGE_CHANNELS",
            "MANAGE_GUILD",
            "ADD_REACTIONS",
            "VIEW_AUDIT_LOG",
            "PRIORITY_SPEAKER",
            "STREAM",
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "SEND_TTS_MESSAGES",
            "MANAGE_MESSAGES",
            "EMBED_LINKS",
            "ATTACH_FILES",
            "READ_MESSAGE_HISTORY",
            "MENTION_EVERYONE",
            "USE_EXTERNAL_EMOJIS",
            "VIEW_GUILD_INSIGHTS",
            "CONNECT",
            "SPEAK",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MOVE_MEMBERS",
            "USE_VAD",
            "CHANGE_NICKNAME",
            "MANAGE_NICKNAMES",
            "MANAGE_ROLES",
            "MANAGE_WEBHOOKS",
            "MANAGE_EMOJIS"
        ]
    },
    execute: function (msg, args, client) {
        name: 'prefix',
            description;
        'Changes the prefix for your server',
            args;
        true,
            usage;
        "<prefix>",
            cooldown;
        2,
            execute(msg, args, pokemon, data);
        {
            if (args[0] === "reset") {
                data[msg.guild.id].prefix = prefix;
                msg.channel.send("Your prefix has been reset and is now: " + prefix);
            }
            else {
                data[msg.guild.id].prefix = args[0];
                msg.channel.send("Your prefix is now: " + data[msg.guild.id].prefix);
            }
            update(data);
        }
    }
};
