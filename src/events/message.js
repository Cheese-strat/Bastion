'use strict';
const Discord = require(`discord.js`);
const storage = require("../storage.json")
module.exports = (client, msg) => {
  if (msg.guild == undefined) {
    if (!msg.author.bot) {
      client.channels.fetch(`629683449976061971`).then(channel => {
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
        })
      })
    }
    return;
  }
  if (data[msg.guild.id] == undefined) {
    data[msg.guild.id] = {
      logs: {
        "id": "NULL",
        "badwords": "on",
        "allmsg": "on",
        "newusers": "on",
        "channelu": "on",
        "useru": "on"
      },
      "prefix": config.prefix,
      "reminders": [],
      "banwords": [],
      "channels": {}
    }
    console.log(`writing ${msg.guild.name} to the file`)
    storage("../src/structures/storage.js", data)//src\structures\storage.js
  }
  if (msg.author.bot || !msg.guild.me.permissionsIn(msg.channel).has("SEND_MESSAGES")) return;
  if (data[msg.guild.id].logs.id != "NULL") {
    data[msg.guild.id].banwords.forEach(ele => {
      if (msg.content.toLowerCase().includes(ele)) {
        msg.channel.send(`You cannot use the word: \`${ele}\` in this server!`)
        msg.delete()
          .then(() => {
            h
            if (data[msg.guild.id].logs.id != "NULL") {
              client.channels.cache.get(data[msg.guild.id].logs.id).send(`${msg.author.tag} used the banned word: \`${ele}\` in <#${msg.channel.id}>`)
            }
          })
          .catch(() => {
            if (data[msg.guild.id].logs.id != "NULL") return client.channels.cache.get(data[msg.guild.id].logs.id).send(`I do not have the correct permissions to delete messages in <#${msg.channel.id}>.`)
          })
      }
    })
  }
  if ((msg.mentions.users.size > 0) && msg.content.includes(`${client.user.id}>`)) msg.channel.send("my prefix in this server is: " + data[msg.guild.id].prefix)
  if (!msg.content.startsWith(data[msg.guild.id].prefix)) return
  if (!msg.guild.me.permissionsIn(msg.channel).has('EMBED_LINKS')) return msg.channel.send("I need the `Embed Links` permission.");
  let args = msg.content.slice(data[msg.guild.id].prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase()
  msg.flags = []
  args.forEach(arg => {
    if (arg.startsWith(config.flagprefix)) {
      args.filter(a => a.startsWith(config.flagprefix))
      let flag = arg.slice(config.flagprefix.length, arg.length)
      msg.flags.push(flag)
    }
  })
  args.filter(a => msg.flags.includes(config.flagprefix + a))
  if (commandName === `crash` && config.developers[msg.author.id] >= 4) throw new Error(`Crashing on authorization of ${msg.author.tag}`)

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;
  if (command.args && !args.length) {
    let reply = `You didn't give me any arguments, ${msg.author}!`;
    if (command.usage) {
      reply += `\nThe correct usage is: \`${data[msg.guild.id].prefix}${command.name} ${command.usage}\``;
    }
    return msg.channel.send(reply);
  }
  if (command.perms) {
    if (!command.perms.every(permFlag => {
      msg.guild.me.permissionsIn(msg.channel).has(permFlag)
    })) return msg.channel.send(`I dont have the correct permissions to use this command`)

    if (!command.perms.every(permFlag => {
      msg.member.permissionsIn(msg.channel).has(permFlag)
    })) return msg.channel.send(`You dont have the correct permissions to use this command`)
  }
  if (!msg.guild.me.permissionsIn(msg.channel).has('ADMINISTRATOR') && command.admin) return msg.channel.send(`You must have administrator permission to use this command`)
  if (command.dev && !(config.developers[msg.author.id] >= command.dev)) return msg.channel.send(`only developers can use that command!`)
  if (command.specific && command.specific !== msg.author.id) return msg.channel.send("You are not the right user to use this command")
  if (!command.Case) args.map(x => x.toLowerCase())
  if (command.poke) {
    if (args.length > command.usage.split(`> <`).length) {
      value = args[0] + args[1]
      args.shift()
      args[0] = value
    }
    args[0] = ez.findpokemon(args[0])
  }
  if (!client.cooldowns.has(command.name)) client.cooldowns.set(command.name, new Discord.Collection());

  const now = Date.now();
  const timestamps = client.cooldowns.get(command.name);
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
    command.execute(msg, args, pokemon, data, client);
    console.log(`executed command: ${command.name}`)
  } catch (error) {
    client.channels.cache.get(`629683449976061971`).send(`<@625149330348703744> \n command: ${msg.content} \n Error: ${error} \n channel: <#${msg.channel.id}> \n server: ${msg.guild.name}`);
    console.log(`message: ${msg.content} \n Error: ${error} \n channel: <#${msg.channel.id}> \n server: ${msg.guild.name}`);
    msg.channel.send(`There was an error trying to execute that command!`);
  }

}