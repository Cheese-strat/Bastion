import clientClass from "./client";
import { Message } from "discord.js"
export default class {
    path: string
    client: clientClass
    run: (c: clientClass, m: Message) => any
    constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
    }
}