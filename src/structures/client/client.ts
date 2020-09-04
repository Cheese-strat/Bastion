import { Client, Collection, ClientOptions, TextChannel, User } from "discord.js";

import { readFileSync } from "fs";
import { storage as store } from "../util/storage"
import { Command } from "../base/Command";
import { storageGuildTYPE, storageTYPE } from "./types";
import { __values } from 'tslib';
import { Event } from '../library';

export class clientClass extends Client {
    commands: Collection<string, Command>
    cooldowns: Collection<string, any>
    events: Collection<string, Event>
    srcPath: string
    constructor(basepath: string, options: ClientOptions = {}) {
        super(options);
        this.commands = new Collection();
        this.cooldowns = new Collection();
        this.events = new Collection()
        this.srcPath = basepath;
    }

    public get developers(): string[] {
        const read: string = readFileSync(`config.json`, "utf8")
        return JSON.parse(read).developers
    }

    public get config(): any {
        const read = readFileSync(`config.json`, "utf8")
        return JSON.parse(read)
    }

    public async getLogChannel(id?: string): Promise<TextChannel> {
        const channel = await super.channels.fetch(id || this.config.logChannel)
        if (channel.type === "text") return channel as TextChannel
        throw new Error(`expected logChannel of type text, store or news. received: ${channel.type}, id: ${id}`)
    }

    public async getUser(str: string): Promise<User | undefined> {
        let User = await this.users.fetch(str).catch(x => console.log(x.message))

        return User || this.users.cache.find(u => u.username === str)
    }

    public DB(guildID?:never, data?:never):storageTYPE
    public DB(guildID:string, data?:never):storageGuildTYPE
    public DB(guildID:string, data:storageGuildTYPE):storageGuildTYPE
    public DB(guildID:any, data:any):any {
        return data ? store(this.srcPath, guildID, data) : store(this.srcPath, guildID)
    }

    public start(eventFunc: (client: this) => any, commFunc: (client: clientClass) => any, token: string) {
        if (token.split(".").length < 2) throw new Error(`expected a string token. received: ${token}`)
        commFunc(this)
        eventFunc(this)
        super.login(token)
        return this
    }
    private _startEvents(){
        this.events.forEach(event=>{
            return this.on(event.name, event.execute);
        })
    }

}