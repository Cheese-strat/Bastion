import { MessageEmbed } from 'discord.js'
import { clientClass, Command, MessageTYPE } from '../../structures/library'
import { version } from 'discord.js'

export default (client: clientClass) =>
    new Command(
        client,
        {
            cmdName: 'bot-info',
            description: 'Statistics and data about the bot',
            args: { required: false, case: false, usage: '' },
            cooldown: 3,
            aliases: ['bot', 'stats'],
            permissions: {
                send: true,
                embed: true,
                delete: false,
                react: false,
                bot: [],
                auth: [],
            },
        },
        function run(client: clientClass, msg: MessageTYPE) {
            const Embed = new MessageEmbed()
            Embed.setColor('0xFF4500')
            Embed.setTitle('Statistics')
            Embed.addFields([
                {
                    name: 'Memory usage',
                    value:
                        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
                            2
                        ) + 'MB',
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
                    value: version,
                },
                {
                    name: 'Node',
                    value: process.version,
                },
            ])
            msg.channel.send(Embed)
        }
    )
