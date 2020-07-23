import { Command, clientClass, messageTYPE, CMDPermsObj } from "../structures/library";

export default class extends Command {
    name= ""
    description: string
    category?: string
    args: {
        required: false
        case: false
        usage: string
    }
    cooldown: number
    aliases: string[]
    permissions: CMDPermsObj
    constructor(path:string, client:clientClass) {
        super(path, client)
        this.description = ""
        this.args = {
            required: false,
            case: false,
            usage: ""
        }
        this.cooldown = 3
        this.aliases = []
        this.permissions = {
            send: false,
            embed: false,
            delete: false,
            react: false,
            bot: [],
            auth: []
        }


    }
    run(client: clientClass, msg: messageTYPE) {

    }
}