import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "ban"
    description = "Bans a user from the server"
    category = "";
    args = {
        required: true,
        case: true,
        usage: "<target>"
    };
    cooldown = 10
    aliases = [];
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
        if (!msg.permissions().has('BAN_MEMBERS')) return msg.channel.send("you dont have permission to do that")
        if (msg.permissions().has('BAN_MEMBERS')) return msg.channel.send("Insufficient permissions, please contact an administrator")
        var member = await msg.guild.getMember(msg.args.join(" "))
        if (!member) return msg.channel.send("Please mention a valid user")
        member.ban().then((member) => {
            return msg.channel.send(member.displayName + " has been successfully banned :point_right: ");
        }).catch(() => {
            return msg.channel.send("You cannot ban this user");
        });
    }
}