import { Command, clientClass, MessageTYPE } from '../../structures/library'

export default (client: clientClass) =>
    new Command(
        client,
        {
            cmdName: 'coinflip',
            description: 'Randomly flips a coin for you',
            category: '',
            args: {
                required: false,
                case: false,
                usage: '',
            },
            cooldown: 3,
            aliases: ['flip', 'coin'],
            permissions: {
                send: true,
                embed: true,
                react: false,
                delete: false,
                bot: [],
                auth: [],
            },
        },
        function run(_client: clientClass, msg: MessageTYPE) {
            return msg.channel.send(
                `"The coin landed on "${
                    Math.random() > 0.5 ? 'Coins' : 'Heads'
                }!`
            )
        }
    )
