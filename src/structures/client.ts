'use strict';
import{ Client, Collection, ClientOptions } from "discord.js";
import { readFileSync } from "fs";
import store from "storage.js";
import Command from "./Command"


export default class client extends Client {
    prefixes: any;
    commands : Collection<string, Command>
    cooldowns : Collection<string, Collection<string,string>>
    path: string
    constructor(basepath: string, options:ClientOptions = {}) {
        super(options)
        this.commands = new Collection()
        this.cooldowns = new Collection()
        this.path = basepath
        const storage = require("../storage.json")
        this.prefixes = store("../storage.json")
    }

    get developers() {
        return JSON.parse(readFileSync("config.json")).developers
    }
    get config() {
        return JSON.parse(readFileSync("config.json"))
    }
    saveDB() {
        this.prefixes = store(`${this.path}/storage.json`)
        return this.prefixes
    }
    start(eventFunc:(client:Client)=>{}, commFunc, token) {
        if (token.split(".").length < 2) throw new Error(`you dumb you gave me this: ${token}`)
        commFunc(this)
        eventFunc(this)
        super.login(token)
        return this
    }

}