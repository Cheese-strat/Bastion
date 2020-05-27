import { Client, Collection } from "discord.js";
import { readFileSync } from "fs";
/**
 * @extends {Client}
 * @returns the extended client class
 * @typedef class
 * @example const client = new client({ messageSweepInterval:10000 })
 * @description for creating a new client, with a for extra special features that improve some aspects of its execution
 * @argument {Object} options the optional client_options object for the discord client interactions
 * @author cheese_strat
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
}
module.exports = client
