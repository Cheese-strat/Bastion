module.exports = {
	name: 'server',
	description: 'Has useful information about the server',
	args: false,
	aliases: ['server-info', 'guild', 'guild-data', 'guild-info', 'server-data'],
	cooldown:3,
	execute(msg) {
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
		const guild = msg.guild.fetch()
		const guildcreationdate = `${guild.createdAt.getDate()}/${guild.createdAt.getMonth()}/${guild.createdAt.getFullYear()}`
		const Embed = ez.embed(0x0099ff,guild.name)   
		Embed.setThumbnail(guild.iconURL)
		Embed.addFields(
			{name: 'Amount of humans:', value: guild.members.cache.filter(m=> !m.user.bot), inline: true},
			{name: 'Number of bots:', value: guild.members.cache.filter(m=> m.user.bot), inline: true},
			{ name: 'Number of roles:', value: guild.roles.cache.size, inline: true},
			{name: `Number of channels`, value: guild.channels.cache.size, inline: true},
			{name: 'Owner: ', value: guild.owner.user.tag, inline: true},
			{name: `Server creation date:`, value: guildcreationdate, inline: true}
		)
		Embed.setFooter(`Server id: ${msg.guild.id}`);
		return msg.channel.send(Embed);
	}
};
