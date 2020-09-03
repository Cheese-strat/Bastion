import { MessageEmbed, User } from "discord.js";
import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "who"
    description = "Finds all the information about a certain user"
    category = "";
    args = {
        required: true,
        case: false,
        usage: "<target user>"
    };
    cooldown = 3;
    aliases = ['whois', 'find', "search", "finduser"];
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
        const str = msg.args.join(" ")
        let user = await client.getUser(str)
        const member = await msg.guild.getMember(str)
        const Embed = new MessageEmbed()
        if (!user && !member) return msg.channel.send("I could not find that user")
        else user = member?.user as User
        const rego = `${user.createdAt.getUTCDate()}/${user.createdAt.getUTCMonth() + 1}/${user.createdAt.getUTCFullYear()}`
        if (user && !member) {
            Embed.setColor("RANDOM")
            Embed.setTitle(user.tag)
            Embed.setThumbnail(user.displayAvatarURL({ dynamic: true, format: "png" }))
            Embed.setFooter(`ID: ${user.id}`);
            Embed.addField('registered', `${rego}`, true)
        }
        if (user && member) {
            /* let arr = msg.guild.members.cache.array()
            arr.sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
            let joinpos: number = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id == user.id) joinpos = i + 1
            } */
            //const join = `${member.joinedAt.getUTCDate()}/${member.joinedAt.getUTCMonth() + 1}/${member.joinedAt.getUTCFullYear()}`
            Embed.setColor(member.displayHexColor.slice(1))
            Embed.setTitle(user.tag)
            Embed.setDescription(`Nickname: ${member.nickname}`)
            Embed.setThumbnail(user.displayAvatarURL({ dynamic: true, format: "png" }))
            Embed.setFooter(`ID: ${user.id}`);
            //Embed.addField('Joined', `${join}`, true)
            //Embed.addField('join position', `${joinpos}`, true)
            Embed.addField('registered', `${rego}`, true)
            Embed.addField('roles', member.roles.cache.map(r => r.toString()), true)
        }
        return msg.channel.send(Embed)
    }
}