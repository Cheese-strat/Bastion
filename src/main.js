'use strict';
exports.__esModule = true;
var client_1 = require("./structures/client");
var commands_1 = require("./Handlers/commands");
var events_1 = require("./Handlers/events");
var config_json_1 = require("../config.json");
var client = new client_1["default"](__dirname, config_json_1["default"].client_Options);
console.log("initializing Discord bot");
client.run(events_1["default"], commands_1["default"], config_json_1["default"].token);
["uncaughtException", "warning", "unhandledRejection"].forEach(function (p) { return process.on(p, console.error); });
