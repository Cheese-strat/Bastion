'use strict';
import Client from "./structures/client";
import Commands from "./Handlers/commands";
import Events from "./Handlers/events";
import * as config from "../config.json";
const client = new Client(__dirname, config.client_Options);
console.log(`initializing Discord bot`);
client.run(Events, Commands, config.token);
["uncaughtException", "warning", "unhandledRejection"].forEach(p=>process.on(p, console.error))