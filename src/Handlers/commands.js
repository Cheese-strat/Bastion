const { readdirSync } = require("fs")
const Command = require("../structures/Command.js")
module.exports = (client)=>{
    for (const fileName of readdirSync(`./src/commands`).filter(f => f.endsWith(".js"))) {
        const commandName = fileName.slice(0, fileName.length - 3)
       // const commandFile = require(`${client.path}/commands/${fileName}`)
        const command = new Command(require(`${client.path}/commands/${fileName}`))
        client.commands.set(commandName, command)
        console.log(`found command: ${commandName}`)
    }
}