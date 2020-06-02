const { readdirSync } = require("fs")
for (const Folder of require("fs").readdirSync('./commands').filter(folder => !folder.includes("."))) {
    for (const cmdfile of require("fs").readdirSync(`./commands/${Folder}`).filter(file => file.endsWith(".js"))) {
        const command = require(`./commands/${Folder}/${cmdfile}`);
        command.category = Folder
        client.commands.set(command.name, command);
    }
}
module.exports = (client) => {
    for (const fileName of readdirSync(`./src/commands`).filter(f => f.endsWith(".js"))) {
        const commandName = fileName.slice(0, fileName.length - 3)
        const commandOBJ = require(`${client.path}/commands/${fileName}`)
        client.commands.set(commandName, commandOBJ)
        console.log(`found command: ${commandOBJ.name}`)
    }
}