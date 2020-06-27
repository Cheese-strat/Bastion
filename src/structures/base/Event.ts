import clientClass from "../client/client";
import { ClientEvents } from "discord.js"
export abstract class Event {
    abstract name:keyof ClientEvents
    path: string
    client: clientClass
    abstract run: (c: clientClass) => any
    constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
    }
}