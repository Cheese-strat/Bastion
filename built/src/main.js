'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./structures/client"));
const commands_1 = __importDefault(require("./Handlers/commands"));
const events_1 = __importDefault(require("./Handlers/events"));
const config_json_1 = __importDefault(require("../config.json"));
const path_1 = require("path");
const client = new client_1.default(path_1.normalize(__dirname + "/."), {});
console.log(`initializing Discord bot`);
client.start(events_1.default, commands_1.default, config_json_1.default.token);
["uncaughtException", "warning", "unhandledRejection"].forEach(p => process.on(p, console.error));
