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
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var fs_1 = require("fs");
var storage_1 = require("./storage");
var client = /** @class */ (function (_super) {
    __extends(client, _super);
    function client(basepath, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.commands = new discord_js_1.Collection();
        _this.cooldowns = new discord_js_1.Collection();
        _this.path = basepath;
        var storage = require("../storage.json");
        _this.prefixes = storage_1["default"]("../storage.json", storage);
        return _this;
    }
    Object.defineProperty(client.prototype, "developers", {
        get: function () {
            var read = fs_1.readFileSync("config.json");
            return JSON.parse(read.toString()).developers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(client.prototype, "config", {
        get: function () {
            var read = fs_1.readFileSync("config.json");
            return JSON.parse(read.toString());
        },
        enumerable: false,
        configurable: true
    });
    client.prototype.saveDB = function (data) {
        this.prefixes = storage_1["default"](this.path + "/storage.json", data);
        return this.prefixes;
    };
    client.prototype.start = function (eventFunc, commFunc, token) {
        if (token.split(".").length < 2)
            throw new Error("you dumb you gave me this: " + token);
        commFunc(this);
        eventFunc(this);
        _super.prototype.login.call(this, token);
        return this;
    };
    return client;
}(discord_js_1.Client));
exports["default"] = client;
