const {getmember} = require("../../ez.js")
module.exports = {
	name: __filename.slice(0, -3),
    description: "Throws someone against the wall, for when they start insulting you.",
    args: {
        required: true,
        case: false,
        usage: "<target>"
    },
    cooldown: 3,
    aliases: ['yeet', 'hurl'],
    permissions: {
        bot: [
            "VIEW_CHANNEL",
            "SEND_MESSAGES",
            "EMBED_LINKS",
            "VIEW_GUILD_INSIGHTS",
        ],
        author: [
            "VIEW_GUILD_INSIGHTS",
        ],
        mentions: [
            "VIEW_CHANNEL",
            "READ_MESSAGE_HISTORY",
        ]
    },
    execute(msg, args) {
		getmember(msg.guild, args.join(" "))
    	if (member==undefined) return msg.channel.send("Please mentions a valid user")
    	return msg.channel.send(`${msg.author.username} throws ${member} against the wall`);
	}
};