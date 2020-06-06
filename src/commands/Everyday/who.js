const ez = require("../../ez.js")
module.exports = {
	name: `who`,
	description: `Finds all the information about a certain user`,
	cooldown: 3,
	args: true,
	usage: "<target user>",
	aliases: ['whois', 'find', "search", "finduser"],
	execute(msg, args, pokemon, data, client) {
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
    execute(msg, args, client) {
		var string = args.join(" ")
		var user = ez.getuser(client, string)
		var member = ez.getmember(msg.guild, string)
		if (!user && !member) return msg.channel.send("I could not find that user")
		if (!user && member) user = member.user
		var rego = `${user.createdAt.getUTCDate()}/${user.createdAt.getUTCMonth()+1}/${user.createdAt.getUTCFullYear()}`
		if (user && !member) {
			var embed = ez.embed("RANDOM", user.tag)
			embed.setThumbnail(user.displayAvatarURL)
			embed.setFooter(`ID: ${user.id}`);
			embed.addField('registered', `${rego}`, true)
		}
		if (user && member) {
			let arr = msg.guild.members.array()
			arr.sort((a, b) => a.joinedAt - b.joinedAt)
			for (let i = 0; i < arr.length; i++) {
				if (arr[i].id == user.id) var joinpos = i+1
			}
			var date = new Date(member.joinedTimestamp)
			var join = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()}`
			var embed = ez.embed(member.displayHexColor.slice(1), user.tag)
			embed.setDescription(`Nickname: ${member.nickname}`)
			embed.setThumbnail(user.displayAvatarURL)
			embed.setFooter(`ID: ${user.id}`);
			embed.addField('Joined', `${join}`, true)
			embed.addField('join position', `${joinpos}`, true)
			embed.addField('registered', `${rego}`, true)
			embed.addField('roles', member.roles.map(r => `${r}`), true)
			//embed.addField('permissions', `{member.permissions.map(r => `${r}`);}`, true)
		}
		return msg.channel.send(embed)
	}
};
