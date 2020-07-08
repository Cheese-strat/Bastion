import { clientClass } from "../client/client";
import { Message } from "discord.js"
export abstract class Command {
    path: string
    client: clientClass
    abstract name: string
    abstract description: string
    abstract category?: string
    abstract args: {
        required: false
        case: false
        usage: string
    }
    abstract cooldown: number
    abstract aliases: string[]
    abstract perms: permsobj
    abstract extraPermissions: perms[]
  permissions: any;
    abstract run(c: clientClass, m: Message): any
    constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
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
    delete?: boolean
    react?: boolean
}