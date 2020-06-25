'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (client) => {
    for (const Folder of fs_1.readdirSync(`${client.path}/commands`).filter(folder => !folder.includes("."))) {
        for (const fileName of fs_1.readdirSync(`${client.path}/commands/${Folder}`).filter(file => file.endsWith(".ts"))) {
            const commandOBJ = require(`${client.path}/commands/${Folder}/${fileName}`);
            commandOBJ.category = Folder;
            client.commands.set(commandOBJ.name, commandOBJ);
            console.log(`found command: ${commandOBJ.name}`);
        }
        ;
    }
    ;
};
