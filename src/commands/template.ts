import { Command, clientClass, messageTYPE, CMDPermsObj } from "../structures/library";

export class Template extends Command {
    name: string
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
    run(client, msg) {

    }
}
type perms =
    | 'CREATE_INSTANT_INVITE'
    | 'KICK_MEMBERS'
    | 'BAN_MEMBERS'
    | 'ADMINISTRATOR'
    | 'MANAGE_CHANNELS'
    | 'MANAGE_GUILD'
    | 'VIEW_AUDIT_LOG'
    | 'PRIORITY_SPEAKER'
    | 'STREAM'
    | 'SEND_TTS_MESSAGES'
    | 'MENTION_EVERYONE'
    | 'VIEW_GUILD_INSIGHTS'
    | 'CONNECT'
    | 'SPEAK'
    | 'MUTE_MEMBERS'
    | 'DEAFEN_MEMBERS'
    | 'MOVE_MEMBERS'
    | 'USE_VAD'
    | 'CHANGE_NICKNAME'
    | 'MANAGE_NICKNAMES'
    | 'MANAGE_ROLES'
    | 'MANAGE_WEBHOOKS'
    | 'MANAGE_EMOJIS';

interface permsobj {
    send: boolean
    embed: boolean
    delete: boolean
    react: boolean
}