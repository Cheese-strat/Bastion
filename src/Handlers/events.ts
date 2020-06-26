import { readdirSync } from "fs";
import Client from "../lib/structures/client";
import { ClientEvents, Structures } from "discord.js";

export default (client: Client):any => {
    readdirSync("./src/events").filter(function (f: string) {
        return f.endsWith(".js");
    }).forEach(function (fileName: string) {
        const file_name = fileName.split(".")[0] as keyof ClientEvents;
        const cmdFile = require(client.path + "/events/" + fileName)
        const binded = cmdFile.bind(null, client) as (client: Client, passed: ClientEvents[keyof ClientEvents])=>any
        client.on(file_name, binded as any)
    });
};