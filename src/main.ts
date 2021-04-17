import GuildExtension from "./structures/extended/Guild";
import MessageExtension from "./structures/extended/Message";
import UserExtension from "./structures/extended/User";
import { clientClass } from "./structures/library";
import Commands from "./Handlers/commands";
import Events from "./Handlers/events";
import { normalize } from "path";
import { client_Options, token } from "../config.json";

// extend structures, must be done before creating the client
GuildExtension();
MessageExtension();
UserExtension();

const client = new clientClass(normalize(__dirname), client_Options);

console.log(`initializing Discord bot`);

client.start(Events, Commands, token);

["uncaughtException", "warning", "unhandledRejection"].forEach(p =>
	process.on(p, console.error),
);
