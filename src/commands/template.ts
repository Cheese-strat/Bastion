/** @ts-ignore */
import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = ""
    description = ""
    category = "";
    args = {
        required: false,
        case: false,
        usage: ""
    };
    cooldown = 0
    aliases = ["adwoiajdoaj"];
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

    }
}