import { clientClass } from "../client/client";
import { Message } from "discord.js"
import { CMDPermsObj } from '../client/types';
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
    abstract permissions: CMDPermsObj;
    abstract run(c: clientClass, m: Message): any
    constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
    }
}