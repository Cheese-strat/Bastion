/**
 * 
 */
module.exports = class Command {
    /**
     * 
     * @param {Object} options
     * @typedef
     */
    constructor(options) {
        /**
         * @const {string}
         */
        this.name = options.name
        /**
         * @type {string} describes the command
         */
        this.description = options.description
        /**
         * @type { boolean } the name of the command
         */
        this.args = options.argsRequired
        /**
         * @type {string} the name of the command
         */
        this.usage = options.argumentUsage
        /**
         * @type {number} the name of the command
         */
        this.cooldown = options.cooldown
        /**
         * @type {string[]} the name of the command
         */
        this.aliases = options.aliases
        /**
         * @type {boolean} the name of the command
         */
        this.case = options.caseSensitive
        /**
         * @type {string[]} the name of the command
         */
        this.MPerms = options.UserPermissions
        /**
         * @type {string[]} the name of the command
         */
        this.BPerms = options.BotPermissions
        /**
        *@type {function} the execution function
        */
        this.run = options.run
    }
    /**
    *@param {require("discord.js").Message} message
    */
    run(message, args, client) {
        options.run(message, args, client)
    }
}
