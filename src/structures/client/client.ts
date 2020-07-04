import { Client, Collection, ClientOptions, TextChannel } from "discord.js";
import { readFileSync } from "fs";
import store from "../util/storage";
import Command from "../base/Command";

export default class clientClass extends Client {
    data: object;
    commands: Collection<string, Command>
    cooldowns: Collection<string, any>
    path: string
    constructor(basepath: string, options: ClientOptions = {}) {
        super(options)
        this.commands = new Collection()
        this.cooldowns = new Collection()
        this.path = basepath
        const data = require("../storage.json")
        this.data = store("../", null)
    }

    get developers() {
        const read: string = readFileSync(`config.json`, "utf8")
        return JSON.parse(read).developers
    }

    get config() {
        const read = readFileSync(`config.json`, "utf8")
        return JSON.parse(read)
    }

    async getLogChannel(id?: string): Promise<TextChannel> {
        const channel = await super.channels.fetch(id || this.config.logChannel)
        if (channel.type === "text") return channel as TextChannel
        throw new Error(`expected logChannel of type text, store or news. received: ${channel.type}, id: ${id}`)
    }

    saveDB(guildID: string, data: object) {
        this.data = store("../", guildID, data)
        return this.data
    }

    start(eventFunc: (client: this) => any, commFunc: (client: Client) => any, token: string) {
        if (token.split(".").length < 2) throw new Error(`you dumb you gave me this: ${token}`)
        commFunc(this)
        eventFunc(this)
        super.login(token)
        return this
    }

}