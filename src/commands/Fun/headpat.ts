import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "headpat";
    description = "Pats the target on the head";
    category = "";
    args = {
        required: true,
        case: true,
        usage: "<target>"
    };
    cooldown = 2;
    aliases = ["rub","pat"];
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
    run(_client: clientClass, msg: messageTYPE) {
        var member = msg.guild.getMember(msg.args.join(" "))
    	if (!member) return msg.channel.send("Please mention a valid user")
    	return msg.channel.send(`${msg.author.username} pats ${member.toString()} on the head <:pat:671676931623878677>`);
    }
}