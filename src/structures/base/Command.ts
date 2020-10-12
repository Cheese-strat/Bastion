import { clientClass } from "../client/client";
import { Message } from "discord.js"
import { CMDPermsObj } from '../client/types';
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
    abstract permissions: CMDPermsObj;
    abstract run(c: clientClass, m: Message): any
    protected constructor(client: clientClass) {
        this.client = client
    }
}