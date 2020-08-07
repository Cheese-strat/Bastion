import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "hug"
    description = "Hugs the target, everyone needs one once and a while."
    category = "";
    args = {
        required: true,
        case: true,
        usage: "<target>"
    };
    cooldown = 2
    aliases = ["cuddle", "squeeze"];
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
    run(client: clientClass, msg: messageTYPE) {
        const member = msg.guild.getMember(msg.args.join(" "))
    	if (!member) return msg.channel.send("Please mention a valid user")
    	return msg.channel.send(`${msg.author.username} Hugs ${member.toString()} 🤗`);
    }
}