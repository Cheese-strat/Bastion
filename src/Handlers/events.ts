import { readdirSync } from "fs";
import { clientClass } from "../structures/library";
import { ClientEvents } from "discord.js";
import { normalize } from 'path';

export default (client: clientClass): any => {
    readdirSync(normalize(client.srcPath + "/events/")).filter(function (f: string) {
        return f.endsWith(".js");
    }).forEach((fileName: string) => {
        const file_name = fileName.split(".")[0] as keyof ClientEvents;
        const cmdFile = require(normalize(client.srcPath + "/events/" + fileName)).default
        client.events.set(cmdFile.name, new cmdFile(client))
    });
};