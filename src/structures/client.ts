import { Client, Collection, ClientOptions, TextChannel, Channel } from "discord.js";
import { readFileSync } from "fs";
import store from "./storage";
import Command from "./Command"


export default class clientClass extends Client {
    data: object;
    commands: Collection<string, Command>
    cooldowns: Collection<string, Collection<string, string>>
    path: string
    constructor(basepath: string, options: ClientOptions = {}) {
        super(options)
        this.commands = new Collection()
        this.cooldowns = new Collection()
        this.path = basepath
        const data = require("../storage.json")
        this.data = store("../", null)
    }

    async getLogChannel(): Promise<TextChannel | Channel> {
        const id = this.config.logChannel
        const channel = await super.channels.fetch(id)
        if (channel.type === "text") return channel as TextChannel
        return channel as Channel
    }

    get developers() {
        const read: string = readFileSync(`config.json`, "utf8")
        return JSON.parse(read).developers
    }
    get config() {
        const read = readFileSync(`config.json`, "utf8")
        return JSON.parse(read)
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