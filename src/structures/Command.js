/**
 * 
 */
module.exports = class Command {
    /**
     * 
     * @param {Object} options
     * @typedef
     */
    constructor(
        /**
         * @typedef {Object} options
         * @property {string} name
         * @property {string} description
         * @property {boolean} argsRequired
         * @property {string} argumentUsage
         * @property {number} cooldown
         * @property {string[]} aliases
         * @property {boolean} caseSensitive
         * @property {string[]} UserPermissions
         * @property {string[]} BotPermissions
         * @property {function} run
         */
        options) {
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
        this.run = options.run

    }
    /**
    *@param {require("discord.js").Message} message
    */
    run(message, args, client) {
        options.run(message, args, client)
    }
}
