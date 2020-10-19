import { clientClass } from '../client/client'
import { Message } from 'discord.js'
import { CMDPermsObj } from '../client/types'
export abstract class Command {
    client: clientClass
    abstract cmdName: string
    abstract description: string
    category?: string
    abstract args: {
        required: boolean
        case: boolean
        usage: string
    }
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
    /** @ts-ignore */
    run(c: clientClass, m: Message): any{}
    constructor(_client: clientClass){}
}
