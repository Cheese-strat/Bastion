const { readdirSync } = require("fs")
module.exports = (client)=>{
    for (const fileName of readdirSync(`./src/commands`).filter(f => f.endsWith(".js"))) {
        const commandName = fileName.slice(0, fileName.length - 3)
        const commandOBJ = require(`${client.path}/commands/${fileName}`)
        client.commands.set(commandName, commandOBJ)
        console.log(`found command: ${commandOBJ.name}`)
    }
}