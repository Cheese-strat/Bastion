import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "coinflip"
    description = "Randomly flips a coin for you"
    category = "";
    args = {
        required: false,
        case: false,
        usage: ""
    };
    cooldown = 3
    aliases = ["flip", 'coin'];
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
        return msg.channel.send(`"The coin landed on "${Math.random() > 0.5 ? "Coins" : "Heads"}!`)
    }
}