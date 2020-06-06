'use strict';
const { readdirSync } = require("fs")
module.exports = (client) => {
    /*for (const fileName of readdirSync(`./src/commands`).filter(f => f.endsWith(".js"))) {
        const commandName = fileName.slice(0, fileName.length - 3)
        const commandOBJ = require(`${client.path}/commands/${fileName}`)
        commandOBJ.name = commandName
        client.commands.set(commandName, commandOBJ)
        console.log(`found command: ${commandOBJ.name}`)
    }*/
    for (const Folder of require("fs").readdirSync(`${client.path}/commands`).filter(folder => !folder.includes("."))) {
        for (const fileName of require("fs").readdirSync(`${client.path}/commands/${Folder}`).filter(file => file.endsWith(".js"))) {
            const commandOBJ = require(`${client.path}/commands/${Folder}/${fileName}`)
            commandOBJ.category = Folder
            client.commands.set(commandOBJ.name, commandOBJ)
            console.log(`found command: ${commandOBJ.name}`)
        }
      }
}