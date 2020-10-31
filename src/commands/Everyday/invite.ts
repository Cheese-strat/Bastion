import { MessageEmbed } from 'discord.js'
import { Command, clientClass, MessageTYPE } from '../../structures/library'

export default (client: clientClass) =>
    new Command(
        client,
        {
            cmdName: 'invite',
            description:
                'Gives you the link of the official server and the bots invite link',
            category: '',
            args: { required: false, case: false, usage: '' },
            cooldown: 3,
            aliases: ['link'],
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
            const Embed = new MessageEmbed()
                .setColor(3447003)
                .setTitle('Bot invite link')
                .setURL(
                    `https://discordapp.com/api/oauth2/authorize?client_id=628443772593635328&permissions=8&scope=bot`
                )
                .setDescription(
                    'Official server invite link: \n https://discord.gg/gTYBdet'
                )
            return msg.channel.send(Embed)
        }
    )
