'use strict';
import { readdirSync } from "fs";
import Client from "../structures/client";
import { ClientEvents, Structures } from "discord.js";
//declare function cmdFunc(client: Client, passed: ClientEvents[keyof ClientEvents], secondpassed?: ClientEvents[keyof ClientEvents]): any

export default (client: Client) => {
    readdirSync("./src/events").filter(function (f: string) {
        return f.endsWith(".js");
    }).forEach(function (fileName: string) {
        const file_name = fileName.split(".")[0] as keyof ClientEvents;
        const cmdFile = require(client.path + "/events/" + fileName)
        const binded = cmdFile.bind(null, client)
        client.on(file_name, binded)
    });
};