const Discord = require("discord.js")
module.exports = {
  name: 'bot-info',
  description: 'Statistics and data about the bot',
  args: false,
  aliases: ['bot', 'stats'],
  cooldown: 3,
  execute(msg, args, pokemon, data, client) {
      const Embed = ez.embed(0xFF4500, "Statistics")
      Embed.addFields({
            name: "Memory usage",
            value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB",
          },
          {
            name: 'Users',
            value: client.users.cache.size.toLocaleString(),
          },
          {
            name: 'Channels',
            value: client.channels.cache.size.toLocaleString(),
          },
          {
            name: 'Servers',
            value: client.guilds.cache.size.toLocaleString(),
          },
          {
            name: 'Discord.js',
            value: Discord.version,
          },
          {
            name: 'Node',
            value: process.version,
          },
        
      )
      msg.channel.send(Embed)
  }
}
