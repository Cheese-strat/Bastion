import { clientClass } from "../client/client";
import { ClientEvents } from "discord.js"
import { ClientEventsTYPE } from '../client/types';
export abstract class Event {
    abstract name: keyof ClientEvents
    path: string
    client: clientClass
    abstract run(element: ClientEventsTYPE[keyof ClientEventsTYPE]): any
    constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
    }
}