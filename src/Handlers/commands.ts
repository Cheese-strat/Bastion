import { readdirSync } from "fs";
import { normalize } from 'path';
import { clientClass } from "../structures/library";
export default (client: clientClass) => {
    for (const Folder of readdirSync(normalize(`${client.srcPath}/commands/`)).filter(folder => !folder.includes("."))) {
        console.log(`Folder: ${Folder}`)
        for (const fileName of readdirSync(`${client.srcPath}/commands/${Folder}`).filter(file => file.endsWith(".ts"))) {
            const commandOBJ = require(`${client.srcPath}/commands/${Folder}/${fileName}`)
            commandOBJ.category = Folder
            client.commands.set(commandOBJ.name, commandOBJ)
            console.log(`found command: ${commandOBJ.name}`)
        }
    }
};
