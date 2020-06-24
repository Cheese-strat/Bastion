'use strict';
var Client = require("./structures/client");
var Commands = require("./Handlers/commands");
var Events = require("./Handlers/events");
var config = require("../config.json");
var client = new Client(__dirname, config.client_Options);
console.log("initializing Discord bot");
client.run(Events, Commands, config.token);
["uncaughtException", "warning", "unhandledRejection"].forEach(function (p) { return process.on(p, console.error); });
