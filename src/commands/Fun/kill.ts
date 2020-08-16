import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "kill"
    description = "To Absolutely murder someone"
    category = "";
    args = {
        required: true,
        case: true,
        usage: "<target>"
    };
    cooldown = 5
    aliases = ["vore", "murder"];
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
    async run(_client: clientClass, msg: messageTYPE) {
        const member = await msg.guild.getMember(msg.args.join(" "))
        if (!member)return await msg.channel.send("You could at least tell me who...")
       return await msg.channel.send(`${member.toString()}, Congratulations, you now have no choice but to accept death`)
    }
}