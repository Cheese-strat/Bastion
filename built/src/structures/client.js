'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const storage_1 = __importDefault(require("./storage"));
class client extends discord_js_1.Client {
    constructor(basepath, options = {}) {
        super(options);
        this.commands = new discord_js_1.Collection();
        this.cooldowns = new discord_js_1.Collection();
        this.path = basepath;
        const storage = require("../storage.json");
        this.prefixes = storage_1.default("../storage.json", storage);
    }
    get developers() {
        const read = fs_1.readFileSync(`config.json`);
        return JSON.parse(read.toString()).developers;
    }
    get config() {
        const read = fs_1.readFileSync(`config.json`);
        return JSON.parse(read.toString());
    }
    saveDB(data) {
        this.prefixes = storage_1.default(`${this.path}/storage.json`, data);
        return this.prefixes;
    }
    start(eventFunc, commFunc, token) {
        if (token.split(".").length < 2)
            throw new Error(`you dumb you gave me this: ${token}`);
        commFunc(this);
        eventFunc(this);
        super.login(token);
        return this;
    }
}
exports.default = client;
