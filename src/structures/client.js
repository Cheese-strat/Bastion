const { Client, Collection } = require("discord.js")
const { readFileSync } = require("fs");
const storage = require("./storage.js")
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
     * @returns the storage object
     */
    get storage() {
        return storage("../storage.json")
    }
    run(eventFunc, commFunc, token){
        commFunc(this)
        eventFunc(this)
        this.login(token)
        return this
    }

}
module.exports = client
