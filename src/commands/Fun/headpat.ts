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
            cmdName: 'headpat',
            description: 'Pats the target on the head',
            category: '',
            args: {
                required: true,
                case: true,
                usage: '<target>',
            },
            cooldown: 2,
            aliases: ['rub', 'pat'],
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
            var member = msg.guild.getMember(msg.args.join(' '))
            if (!member) return msg.channel.send('Please mention a valid user')
            return msg.channel.send(
                `${
                    msg.author.username
                } pats ${member.toString()} on the head <:pat:671676931623878677>`
            )
        }
    )
