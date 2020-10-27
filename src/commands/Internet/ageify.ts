import { MessageEmbed } from 'discord.js'
import fetch from 'node-fetch'

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
            cmdName: 'ageify',
            description: 'I can guess how old someone is based on their name',
            category: '',
            args: {
                required: true,
                case: false,
                usage: '<name>',
            },
            cooldown: 3,
            aliases: [
                'age',
                'age-test',
                'agetest',
                'oldie',
                'boomer-test',
                'boomerness',
            ],
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
            const web = await fetch(
                `https://api.agify.io?name=${msg.args[0]}`
            ).then((response) => response.json())
            const colour: [number, number, number] = [
                (web.age / 100) * 255,
                0,
                255 - (web.age / 100) * 255,
            ]

            const embed = new MessageEmbed()
                .setColor(colour)
                .setTitle('Boomer test!')
                .setDescription(
                    `The predicted age for ${web.name} is ${web.age} years old.`
                )
                .setFooter(
                    `This result was taken from ${web.count} different counts`
                )
            await msg.channel.send(embed)
        }
    )
