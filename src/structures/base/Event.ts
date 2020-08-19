/// <reference path="../types.ts"/>
import { clientClass } from "../client/client";
import { ClientEvents } from "discord.js"

export default abstract class Event {
    abstract name: keyof ClientEvents
    path: string
    client: clientClass
    abstract run(yes:ClientEventsTYPE[keyof ClientEventsTYPE]): any
    protected constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
    }
}