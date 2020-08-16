import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "roll"
    description = "Rolls a dice of any number of sides and gives a randomized result"
    category = "";
    args = {
        required: false,
        case: false,
        usage: "<number of sides>"
    };
    cooldown = 1
    aliases = ["dice", "die"];
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
		return msg.channel.send("You rolled a " + (Math.floor(Math.random() * Number(msg.args[0])||6) + 1).toString());
    }
}