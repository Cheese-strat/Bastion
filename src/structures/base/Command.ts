import clientClass from "../client/client";
import { Message } from "discord.js"
export default abstract class Command {
    path: string
    client: clientClass
    abstract run: (c: clientClass, m: Message) => any
    constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
    }
}