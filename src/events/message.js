module.exports = (client, message) => {
    if (message.author.bot || !message.guild) return

    const prefix = client.prefixes[message.guild.id] || "%"

    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()

    const command = client.commands.get(commandName) || client.commands.find(c => c.aliases.includes(commandName))

    if (!command)return 
    console.log(command)
    command.run(message, args, client)
}