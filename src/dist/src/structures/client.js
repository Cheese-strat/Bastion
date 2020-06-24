'use strict';
const { Client, Collection } = require("discord.js");
const { readFileSync } = require("fs");
const storage = require("./storage.js");
/**
 * @extends {Client}
 * @example const client = new client({ fetchAllMembers:true })
 */
class client extends Client {
    /**
     *
     * @param {Object} options the client options object
     */
    constructor(basepath, options = {}) {
        super(options);
        /**
         * the collection of commands read by the bot
         * @type {Collection}
         */
        this.commands = new Collection();
        /**
         * the collection of cooldowns of commands are stored here
         * @type {Collection}
         */
        this.cooldowns = new Collection();
        /**
         * @readonly
         * @type {string}
         */
        this.path = basepath;
        this.prefixes = storage("../storage.json", require("../storage.json"));
    }
    /**
     * @returns the
     */
    get developers() {
        return JSON.parse(readFileSync("config.json")).developers;
    }
    /**
     * @param {string} string the key to try and find
     * @returns the config object or the requested value
     */
    get config() {
        return JSON.parse(readFileSync("config.json"));
    }
    /**
     * @returns the storage object
     */
    saveDB() {
        this.prefixes = storage(`${this.path}/storage.json`);
        return this.prefixes;
    }
    run(eventFunc, commFunc, token) {
        if (token.split(".").length < 2)
            throw new Error(`check your token is correct, you provided: ${token}`);
        commFunc(this);
        eventFunc(this);
        this.login(token);
        return this;
    }
}
module.exports = client;
