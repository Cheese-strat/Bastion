import { clientClass } from '../client/client'
import { Message } from 'discord.js'
import { CMDPermsObj, MessageTYPE } from '../client/types'
export class Command {
    client: clientClass
    cmdName: string
    description: string
    category?: string
    args: {
        required: boolean
        case: boolean
        usage: string
    }
    cooldown: number
    aliases: string[]
    permissions: CMDPermsObj
    run: (client:clientClass, msg:MessageTYPE)=>any
    constructor(client: clientClass, cmdOptions: CommandOptionsTYPE, execFunc:(client:clientClass, msg:MessageTYPE)=>any) {
        /* Object.assign(this, cmdOptions) */
        /* for (const x in cmdOptions){
            this[x] = cmdOptions[x]
        } */
        this.client = client
        this.cmdName = cmdOptions.cmdName
        this.description = cmdOptions.description
        this.category = cmdOptions.category
        this.args = cmdOptions.args
        this.cooldown = cmdOptions.cooldown
        this.aliases = cmdOptions.aliases
        this.permissions = cmdOptions.permissions
        this.run = execFunc  
    }
}
export interface CommandOptionsTYPE {
    cmdName: string
    description: string
    category?: string
    args: {
        required: boolean
        case: boolean
        usage: string
    }
    cooldown: number
    aliases: string[]
    permissions: CMDPermsObj
}
