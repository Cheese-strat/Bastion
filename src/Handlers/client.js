import { Client, Collection } from "discord.js";
import { readFileSync } from "fs";
/**
 * @extends {Client}
 * @example const client = new client({ fetchAllMembers:true })
 */
class client extends Client {

    /**
     * 
     * @param {Object} options the client options object
     */
    constructor(options = {}) {
        super(options)
        /**
         * the collection of commands read by the bot
         * @type {Collection}
         */
        this.commands = new Collection()
        /**
         * the collection of cooldowns of commands are stored here
         * @type {Collection}
         */
        this.cooldowns = new Collection()
    }
    /**
     * @returns the
     */
    get developers() {
        return JSON.parse(readFileSync("config.json")).developers
    }
    /**
     * @param {string} string the key to try and find
     * @returns the config object or the requested value
     */
    get config() {
        return JSON.parse(readFileSync("config.json"))
    }
    /**
     * @returns the
     */
    get storage() {
        return require("../structures/storage.js")
    }
}
module.exports = client
