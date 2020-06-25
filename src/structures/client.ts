import { Client, Collection, ClientOptions, TextChannel } from "discord.js";
import { readFileSync } from "fs";
import store from "./storage";
import Command from "./Command"


export default class clientClass extends Client {
    prefixes: any;
    commands: Collection<string, Command>
    cooldowns: Collection<string, Collection<string, string>>
    path: string
    constructor(basepath: string, options: ClientOptions = {}) {
        super(options)
        this.commands = new Collection()
        this.cooldowns = new Collection()
        this.path = basepath
        const storage = require("../storage.json")
        this.prefixes = store("../storage.json", storage)
    }

    async getLogChannel():Promise<TextChannel>{
        const id = this.config.logChannel
        return await super.channels.fetch(id) as TextChannel
    }

    get developers() {
        const read: Buffer = readFileSync(`config.json`)
        return JSON.parse(read.toString()).developers
    }
    get config() {
        const read: Buffer = readFileSync(`config.json`)
        return JSON.parse(read.toString())
    }
    saveDB(data:object) {
        this.prefixes = store(`${this.path}/storage.json`, data)
        return this.prefixes
    }
    start(eventFunc: (client: this) => any, commFunc: (client: Client) => any, token: string) {
        if (token.split(".").length < 2) throw new Error(`you dumb you gave me this: ${token}`)
        commFunc(this)
        eventFunc(this)
        super.login(token)
        return this
    }

}