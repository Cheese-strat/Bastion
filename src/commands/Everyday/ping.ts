import { Command, clientClass, MessageTYPE } from '../../structures/library'

export default (client: clientClass) =>
    new Command(
        client,
        {
            cmdName: 'ping',
            description:
                'Pings the bot and the discord API to test reaction time and latency',
            category: '',
            args: { required: false, case: false, usage: '' },
            cooldown: 2,
            aliases: ['pong'],
            permissions: {
                send: true,
                embed: true,
                react: false,
                delete: false,
                bot: [],
                auth: [],
            },
        },
        function run(client: clientClass, msg: MessageTYPE) {
            msg.channel.send('Ping!').then((m) => {
                m.edit(
                    'Pong! Latency is ' +
                        (m.createdTimestamp - msg.createdTimestamp) +
                        'ms. API Latency is ' +
                        Math.round(client.ws.ping) +
                        'ms'
                )
            })
        }
    )
