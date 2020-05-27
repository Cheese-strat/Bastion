/**
 * 
 */
class Command {
    constructor(options = {
        name: "",
        description: '',
        argsRequired: false,
        argumentUsage: '',
        cooldown: 1,
        aliases: [],
        caseSensitive: false,
        UserPermissions: [],
        BotPermissions: []
    }) {
        /**
         * @type {string} the name of the command
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
         * @type {string} the name of the command
         */
        this.aliases = options.aliases
        /**
          * @type {string} the name of the command
          */
        this.caseSensitive = options.caseSensitive
        /**
         * @type {string} the name of the command
         */
        this.MPerms = options.UserPermissions
        /**
                 * @type {string} the name of the command
                 */
        this.BPerms = options.BotPermissions
    }
}