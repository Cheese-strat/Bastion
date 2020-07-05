import { readdirSync } from "fs";
import { clientClass } from "../structures/library";
export default (client: clientClass) => {
    for (const Folder of readdirSync(`${client.path}/commands`).filter(folder => !folder.includes("."))) {
        for (const fileName of readdirSync(`${client.path}/commands/${Folder}`).filter(file => file.endsWith(".ts"))) {
            const commandOBJ = require(`${client.path}/commands/${Folder}/${fileName}`)
            commandOBJ.category = Folder
            client.commands.set(commandOBJ.name, commandOBJ)
            console.log(`found command: ${commandOBJ.name}`)
        };
    };
};
