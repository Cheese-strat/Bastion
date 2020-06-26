import Client from "./lib/structures/client/client";
import Commands from "./Handlers/commands";
import Events from "./Handlers/events";
import config from "../config.json";
import { normalize } from "path";
const client = new Client(normalize(__dirname+"/."), {});
console.log(`initializing Discord bot`);
client.start(Events, Commands, config.token);
["uncaughtException", "warning", "unhandledRejection"].forEach(p=>process.on(p, console.error))