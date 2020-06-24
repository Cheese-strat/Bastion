'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a = require("discord.js"), Client = _a.Client, Collection = _a.Collection;
var readFileSync = require("fs").readFileSync;
var storage = require("./storage.js");
/**
 * @extends {Client}
 * @example const client = new client({ fetchAllMembers:true })
 */
var client = /** @class */ (function (_super) {
    __extends(client, _super);
    /**
     *
     * @param {Object} options the client options object
     */
    function client(basepath, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        /**
         * the collection of commands read by the bot
         * @type {Collection}
         */
        _this.commands = new Collection();
        /**
         * the collection of cooldowns of commands are stored here
         * @type {Collection}
         */
        _this.cooldowns = new Collection();
        /**
         * @readonly
         * @type {string}
         */
        _this.path = basepath;
        _this.prefixes = storage("../storage.json", require("../storage.json"));
        return _this;
    }
    Object.defineProperty(client.prototype, "developers", {
        /**
         * @returns the
         */
        get: function () {
            return JSON.parse(readFileSync("config.json")).developers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(client.prototype, "config", {
        /**
         * @param {string} string the key to try and find
         * @returns the config object or the requested value
         */
        get: function () {
            return JSON.parse(readFileSync("config.json"));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @returns the storage object
     */
    client.prototype.saveDB = function () {
        this.prefixes = storage(this.path + "/storage.json");
        return this.prefixes;
    };
    client.prototype.run = function (eventFunc, commFunc, token) {
        if (token.split(".").length < 2)
            throw new Error("check your token is correct, you provided: " + token);
        commFunc(this);
        eventFunc(this);
        this.login(token);
        return this;
    };
    return client;
}(Client));
module.exports = client;
