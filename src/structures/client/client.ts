import { Client, Collection, ClientOptions, TextChannel, User } from "discord.js";

import { readFileSync } from "fs";
import { storage as store } from "../util/storage"
import { Command } from "../base/Command";
import { storageGuildTYPE, storageTYPE } from "./types";
import { __values } from 'tslib';

export class clientClass extends Client {
    commands: Collection<string, Command>
    cooldowns: Collection<string, any>
    path: string
    constructor(basepath: string, options: ClientOptions = {}) {
        super(options);
        this.commands = new Collection();
        this.cooldowns = new Collection();
        this.path = basepath;
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

    async getUser(str: string): Promise<User | undefined> {
        let User = await this.users.fetch(str).catch(x => console.log(x.message))

        return User || this.users.cache.find(u => u.username === str)
    }
    public DB(guildID?:never, data?:never):storageTYPE
    public DB(guildID:string, data?:never):storageGuildTYPE
    public DB(guildID:string, data:storageGuildTYPE):storageGuildTYPE
    public DB(guildID:any, data:any):any {
        return data ? store(this.path, guildID, data) : store(this.path, guildID)
    }

    start(eventFunc: (client: this) => any, commFunc: (client: clientClass) => any, token: string) {
        if (token.split(".").length < 2) throw new Error(`expected a string token. received: ${token}`)
        commFunc(this)
        eventFunc(this)
        super.login(token)
        return this
    }

}