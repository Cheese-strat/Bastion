const { readdirSync } = require("fs")

module.exports = (client)=>{
    for (const fileName of readdirSync(`./src/commands`).filter(f => f.endsWith(".js"))) {
        const commandobj = require(`${client.path}/commands/${fileName}`)
        const commandName = fileName.slice(0, fileName.length - 3)
        client.commands.set(commandName, commandobj)
        console.log(`found command: ${commandName}`)
    }
}