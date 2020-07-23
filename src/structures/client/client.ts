import { Client, Collection, ClientOptions, TextChannel } from "discord.js";

import { readFileSync } from "fs";
import { storage as store } from "../util/storage"
import { Command } from "../base/Command";
import { normalize } from "path";
import { storageTYPE } from "./types";

export class clientClass extends Client {
    data: storageTYPE;
    commands: Collection<string, Command>
    cooldowns: Collection<string, any>
    path: string
    constructor(basepath: string, options: ClientOptions = {}) {
        super(options)
        this.commands = new Collection()
        this.cooldowns = new Collection()
        this.path = basepath
        this.data = store(normalize(basepath + "/storage.json"), null)
    }

    get developers(): string[] {
        const read: string = readFileSync(`config.json`, "utf8")
        return JSON.parse(read).developers
    }

    get config(): any {
        const read = readFileSync(`config.json`, "utf8")
        return JSON.parse(read)
    }

    async getLogChannel(id?: string): Promise<TextChannel> {
        const channel = await super.channels.fetch(id || this.config.logChannel)
        if (channel.type === "text") return channel as TextChannel
        throw new Error(`expected logChannel of type text, store or news. received: ${channel.type}, id: ${id}`)
    }

    saveDB(guildID: string, data: object): object {
        this.data = store("../", guildID, data)
        return this.data
    }

    start(eventFunc: (client: this) => any, commFunc: (client: clientClass) => any, token: string) {
        if (token.split(".").length < 2) throw new Error(`you dumb you gave me this: ${token}`)
        commFunc(this)
        eventFunc(this)
        super.login(token)
        return this
    }

}