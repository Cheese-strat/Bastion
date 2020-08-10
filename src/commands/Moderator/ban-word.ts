import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "ban-word"
    description = "keeps the chat clean of any words add by this command"
    category = "";
    args = {
        required: true,
        case: false,
        usage: "<word to ban>"
    };
    cooldown = 5
    aliases = ["adwoiajdoaj"];
    permissions: CMDPermsObj = {
        send: true,
        embed: false,
        react: false,
        delete: false,
        bot: [],
        auth: ["ADMINISTRATOR"]
    };
    constructor(path: string, client: clientClass) {
        super(path, client)
    }
    run(client: clientClass, msg: messageTYPE) {
		let data = client.DB(null)
		data[msg.guild.id].banwords.push(msg.args[0])
		client.DB(msg.guild.id, data[msg.guild.id])
		msg.channel.send(`I have added \`${msg.args[0]}\` to this servers list of banned words`)
    }
}