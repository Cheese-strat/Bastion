import { MessageEmbed } from "discord.js";
import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "server"
    description = 'Has useful information about the server';
    category = "";
    args = {
        required: false,
        case: false,
        usage: ""
    };
    cooldown = 3
    aliases = ['server-info', 'guild', 'guild-data', 'guild-info', 'server-data'];
    permissions: CMDPermsObj = {
        send: true,
        embed: true,
        react: false,
        delete: false,
        bot: [],
        auth: []
    };
    constructor(path: string, client: clientClass) {
        super(path, client)
    }
    async run(client: clientClass, msg: messageTYPE) {
        const guild = await msg.guild.fetch()
        const guildcreationdate = `${guild.createdAt.getDate()}/${guild.createdAt.getMonth()}/${guild.createdAt.getFullYear()}`
        const Embed = new MessageEmbed()
            .setColor(0x0099ff)
            .setTitle(guild.name)
            .setThumbnail(guild.iconURL({ dynamic: true, format: "png" }))
            .addFields(
                { name: 'Amount of humans:', value: guild.members.cache.filter(m => !m.user.bot), inline: true },
                { name: 'Number of bots:', value: guild.members.cache.filter(m => m.user.bot), inline: true },
                { name: 'Number of roles:', value: guild.roles.cache.size, inline: true },
                { name: `Number of channels`, value: guild.channels.cache.size, inline: true },
                { name: 'Owner: ', value: guild.owner.user.tag, inline: true },
                { name: `Server creation date:`, value: guildcreationdate, inline: true }
            )
            .setFooter(`Server id: ${msg.guild.id}`);
        return msg.channel.send(Embed);
    }
}