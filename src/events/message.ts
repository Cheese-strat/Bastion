import { Collection } from 'discord.js'
import { format } from 'util'
import {
    clientClass,
    storage as store,
    guildObject,
    Event,
    MessageTYPE,
    storageTYPE,
} from '../structures/library'
export default class messageEVENT extends Event<'message'> {
    name: 'message' = 'message'
    constructor(client: clientClass) {
        super(client)
    }
    async execute(client: clientClass, msg: MessageTYPE) {
        /* if (
            msg.author.id === '625149330348703744' &&
            msg.content.startsWith('b!eval ')
        ) {
            const str = msg.content.slice(7)
            let evaled
            try {
                evaled = format(eval(str))
            } catch (e) {
                console.log(e)
                return msg.channel.send(e.message)
            }
            return msg.channel.send(
                evaled.length > 2000 ? evaled.slice(0, 1900) : evaled
            )
        } */
        if (msg.guild === null) {
            if (!msg.author.bot) return false
            const channel = await client.getLogChannel()
            channel.send({
                embed: {
                    color: 3447003,
                    author: {
                        name: msg.author.username,
                        icon_url: msg.author.avatarURL(),
                    },
                    title: `DM'd me a message:`,
                    description: msg.content,
                    timestamp: new Date(),
                    footer: {
                        text: `id: ${msg.author.id}`,
                    },
                },
            })
            return false
        }

        /* const stored: storageTYPE = {}
    let data = stored[""]
    if (data === undefined)  data = store(client.srcPath, msg.guild.id, guildObject) 
     */
        if (msg.author.bot || !msg.permissions().has('SEND_MESSAGES'))
            return false
        /* console.log(data)
    if (data.logs.id !== null) {
      for (const word of data.banwords) {
        if (msg.content.toLowerCase().includes(word)) {
          msg.channel.send(`You cannot use the word: \`${word}\` in this server!`)
          const logs = await client.getLogChannel(data.logs.id);
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
    } */
        const prefix = /* data.prefix || */ client.config.prefix
        if (
            msg.mentions.users.size > 0 &&
            msg.content.includes(`${client.user!.id}>`)
        )
            msg.channel.send('my prefix in this server is: ' + prefix)
        if (!msg.content.startsWith(prefix)) return false
        if (!msg.permissions().has('EMBED_LINKS'))
            return msg.channel.send('I need the `Embed Links` permission.')
        let args: string[] = msg.content.slice(prefix.length).trim().split(/ +/)
        const commandName = args.shift()

        if (
            commandName === `crash` &&
            client.developers.includes(msg.author.id)
        )
            throw new Error(`Crashing on authorization of ${msg.author.tag}`)
        if (!commandName) return false
        const command =
            client.commands.get(commandName.toLowerCase()) ||
            client.commands.find(
                (cmd) =>
                    cmd.aliases &&
                    cmd.aliases.includes(commandName.toLowerCase())
            )

        if (!command) return false

        if (command.args.required && !args.length)
            return msg.channel.send(
                `You didn't give me any arguments, ${msg.author}!\nThe correct usage is: \`${prefix}${command.cmdName} ${command.args.usage}\``
            )
        if (!command.args.case) args = args.map((x) => x.toLowerCase())
        if (command.permissions) {
            if (
                !command.permissions.bot.every((permFlag) => {
                    msg.guild!.me!.permissionsIn(msg.channel).has(permFlag)
                })
            )
                return msg.channel.send(
                    `I dont have the correct permissions to use this command`
                )

            if (
                !command.permissions.auth.every((permFlag) => {
                    msg.member!.permissionsIn(msg.channel).has(permFlag)
                })
            )
                return msg.channel.send(
                    `You dont have the correct permissions to use this command`
                )
        }
        if (
            command.category === 'Developer' &&
            !client.developers.includes(msg.author.id)
        )
            return msg.channel.send(`only developers can use that command!`)
        if (!command.args.case) args.map((x) => x.toLowerCase())
        if (!client.cooldowns.has(command.cmdName))
            client.cooldowns.set(command.cmdName, new Collection())

        const now = Date.now()
        const timestamps = client.cooldowns.get(command.cmdName)
        const cooldownAmount = (command.cooldown || 3) * 1000

        if (timestamps.has(msg.author.id)) {
            const expirationTime =
                timestamps.get(msg.author.id) + cooldownAmount

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000
                return msg.reply(
                    `please wait ${timeLeft.toFixed(
                        1
                    )} more second(s) before reusing the ${
                        command.cmdName
                    } command.`
                )
            }
        } else {
            timestamps.set(msg.author.id, now)
            setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount)
        }
        try {
            console.log(`running ${command.cmdName}`)
            return command.run(client, msg)
        } catch (error) {
            const logChannel = await client.getLogChannel()
            logChannel.send(
                `<@625149330348703744> \n command: ${msg.content} \n Error: ${error} \n channel: <#${msg.channel.id}> \n server: ${msg.guild.name}`
            )
            console.log(
                `message: ${msg.content} \n Error: ${error} \n channel: <#${msg.channel.id}> \n server: ${msg.guild.name}`
            )
            msg.channel.send(
                `There was an error trying to execute that command!`
            )
        }
    }
}
