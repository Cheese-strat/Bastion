import { Collection, } from "discord.js"
import { clientClass, storage as store, guildObject, Event, MessageTYPE, storageTYPE } from "../structures/library"

export default class messageEVENT extends Event {
  name: "message" = "message"
  constructor(client: clientClass) {
    super(client)
  }
  async execute(msg: MessageTYPE) {
    if (msg.guild === null) {
      if (!msg.author.bot) return false;
      const channel = await this.client.getLogChannel();
      channel.send({
        embed: {
          color: 3447003,
          author: {
            name: msg.author.username,
            icon_url: msg.author.avatarURL
          },
          title: `DM'd me a message:`,
          description: msg.content,
          timestamp: new Date(),
          footer: {
            text: `id: ${msg.author.id}`,
          },
        }
      });
      return false;
    }
    const storage: storageTYPE = require("../storage.json");
    const data = storage[msg.guild.id];
    if (data === undefined) store("../src/structures/storage.js", msg.guild.id, guildObject)


    if (msg.author.bot || !msg.permissions().has("SEND_MESSAGES")) return false;
    if (data.logs.id !== null) {
      if (msg.args.some(msg.content.toLowerCase().includes)) {

      }
      for (const word of data.banwords) {
        if (msg.content.toLowerCase().includes(word)) {
          msg.channel.send(`You cannot use the word: \`${word}\` in this server!`)
          const logs = await this.client.getLogChannel(data.logs.id);
          try {
            await msg.delete()
          } catch {
            logs.send(`I do not have the correct permissions to delete messages in <#${msg.channel.id}>.\nPlease disable banWords or apply the MANAGE_MESSAGES permission`)
          }
          if (data.logs.badwords) {
            logs.send(`${msg.author.tag} used the banned word: \`${word}\` in <#${msg.channel.id}>`);
          }
        }
      }
    }
    if ((msg.mentions.users.size > 0) && msg.content.includes(`${this.client.user!.id}>`)) msg.channel.send("my prefix in this server is: " + data.prefix)
    if (!msg.content.startsWith(data.prefix)) return false;
    if (!msg.permissions().has('EMBED_LINKS')) return msg.channel.send("I need the `Embed Links` permission.");
    let args: string[] = msg.content.slice(data.prefix.length).trim().split(/ +/);
    const commandName = args.shift()

    if (commandName === `crash` && this.client.developers.includes(msg.author.id)) throw new Error(`Crashing on authorization of ${msg.author.tag}`)
    if (!commandName) return false
    const command = this.client.commands.get(commandName.toLowerCase()) || this.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName.toLowerCase()));

    if (!command) return false

    if (command.args && !args.length) {
      let reply = `You didn't give me any arguments, ${msg.author}!`;
      if (command.args.usage) {
        reply += `\nThe correct usage is: \`${data.prefix}${command.name} ${command.args.usage}\``;
      }
      return msg.channel.send(reply);
    }
    if (command.permissions) {
      if (!command.permissions.bot.every(permFlag => {
        msg.guild!.me!.permissionsIn(msg.channel).has(permFlag)
      })) return msg.channel.send(`I dont have the correct permissions to use this command`)

      if (!command.permissions.auth.every(permFlag => {
        msg.member!.permissionsIn(msg.channel).has(permFlag)
      })) return msg.channel.send(`You dont have the correct permissions to use this command`)
    }
    if (command.category === "Developer" && !this.client.developers.includes(msg.author.id)) return msg.channel.send(`only developers can use that command!`)
    if (!command.args.case) args.map(x => x.toLowerCase())
    if (!this.client.cooldowns.has(command.name)) this.client.cooldowns.set(command.name, new Collection());

    const now = Date.now();
    const timestamps = this.client.cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(msg.author.id)) {
      const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return msg.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the ${command.name} command.`);
      }

    } else {
      timestamps.set(msg.author.id, now);
      setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);
    }
    try {
      return command.run(this.client, msg);
    } catch (error) {
      const logChannel = await this.client.getLogChannel()
      logChannel.send(`<@625149330348703744> \n command: ${msg.content} \n Error: ${error} \n channel: <#${msg.channel.id}> \n server: ${msg.guild.name}`);
      console.log(`message: ${msg.content} \n Error: ${error} \n channel: <#${msg.channel.id}> \n server: ${msg.guild.name}`);
      msg.channel.send(`There was an error trying to execute that command!`);
    }

  }
}