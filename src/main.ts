import { clientClass } from "./structures/library";
import Commands from "./Handlers/commands";
import Events from "./Handlers/events";
import { normalize } from "path";
import { client_Options, token } from "../config.json";
const client = new clientClass(normalize(__dirname), client_Options);
console.log(`initializing Discord bot`);
client.start(Events, Commands, token);
["uncaughtException", "warning", "unhandledRejection"].forEach((p) =>
  process.on(p, console.error)
);
