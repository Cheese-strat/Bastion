import { clientClass } from '../client/client'
import { Message } from 'discord.js'
<<<<<<< HEAD
import { CMDPermsObj, MessageTYPE } from '../client/types'
export class Command {
=======
import { CMDPermsObj } from '../client/types'
export abstract class Command {
>>>>>>> parent of 99de281... moving to instances
    client: clientClass
    abstract cmdName: string
    abstract description: string
    category?: string
    abstract args: {
        required: boolean
        case: boolean
        usage: string
    }
<<<<<<< HEAD
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
=======
    abstract cooldown: number
    abstract aliases: string[]
    abstract permissions: CMDPermsObj
    abstract run(c: clientClass, m: Message): any
    constructor(client: clientClass) {
        this.client = client
    }
}
/** @ts-ignore */
export class extendedCommandTYPE {
    client?: clientClass
    /** @ts-ignore */
>>>>>>> parent of 99de281... moving to instances
    cmdName: string
    /** @ts-ignore */
    description: string
    /** @ts-ignore */
    category?: string
    /** @ts-ignore */
    args: {
        required: boolean
        case: boolean
        usage: string
    }
    /** @ts-ignore */
    cooldown: number
    /** @ts-ignore */
    aliases: string[]
    /** @ts-ignore */
    permissions: CMDPermsObj
<<<<<<< HEAD
=======
    /** @ts-ignore */
    run(c: clientClass, m: Message): any{}
    constructor(_client: clientClass){}
>>>>>>> parent of 99de281... moving to instances
}
