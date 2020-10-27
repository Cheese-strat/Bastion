import {
    Command,
    clientClass,
    MessageTYPE,
    CMDPermsObj,
} from '../../structures/library'

export default (client: clientClass) =>
    new Command(
        client,
        {
            cmdName: 'kill',
            description: 'To Absolutely murder someone',
            category: '',
            args: {
                required: true,
                case: true,
                usage: '<target>',
            },
            cooldown: 5,
            aliases: ['vore', 'murder'],
            permissions: {
                send: true,
                embed: true,
                react: false,
                delete: false,
                bot: [],
                auth: [],
            },
        },
        async function run(_client: clientClass, msg: MessageTYPE) {
            const member = await msg.guild.getMember(msg.args.join(' '))
            if (!member)
                return await msg.channel.send(
                    'You could at least tell me who...'
                )
            return await msg.channel.send(
                `${member.toString()}, Congratulations, you now have no choice but to accept death`
            )
        }
    )
