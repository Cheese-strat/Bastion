import {clientClass} from "./structures/library";
import Commands from "./Handlers/commands";
import Events from "./Handlers/events";
import config from "../config.json";
import { normalize } from "path";
const client = new clientClass(normalize(__dirname+"/."), config.client_Options);
console.log(`initializing Discord bot`);
client.start(Events, Commands, config.token);
["uncaughtException", "warning", "unhandledRejection"].forEach(p=>process.on(p, console.error))