import {
    clientClass,
    CMDPermsObj,
    Command,
    MessageTYPE,
} from '../../structures/library'
import { correct } from '../../structures/library'
export default (client: clientClass) =>
    new Command(
        client,
        {
            cmdName: 'reload',
            description: 'Reloads a command, developers only.',
            args: {
                required: true,
                case: false,
                usage: '<command name>',
            },
            cooldown: 3,
            aliases: [],
            permissions: {
                send: false,
                embed: false,
                react: false,
                delete: false,
                bot: [],
                auth: [],
            },
        },
        function run(client: clientClass, msg: MessageTYPE) {
            const commandName = msg.args[0].toLowerCase()
            const command =
                client.commands.get(commandName) ||
                client.commands.find(
                    (cmd: Command) =>
                        cmd.aliases && cmd.aliases.includes(commandName)
                )

            if (!command) {
                const arr: string[] = []
                client.commands.map((cmd: Command) => {
                    arr.push(cmd.cmdName)
                    cmd.aliases &&
                        cmd.aliases.forEach((e: string) => arr.push(e))
                })
                let corrected = correct({ find: commandName, group: arr })
                if (!corrected)
                    return msg.channel.send(
                        `There is no command with name or alias \`${commandName}\`, ${msg.author}!`
                    )
                const { cmdName }: Command =
                    client.commands.get(corrected as string) ||
                    (client.commands.find((cmd: Command) =>
                        cmd.aliases.includes(corrected as string)
                    ) as Command)
                return msg.channel.send(
                    `There is no command with name or alias \`${commandName}\`\nDid you mean \`${cmdName}\`?`
                )
            }

            delete require.cache[
                require.resolve(
                    `../../commands/${command.category}/${command.cmdName}.js`
                )
            ]
            try {
                const newCommand = require(`../../commands/${command.category}/${command.cmdName}.js`)
                client.commands.set(newCommand.name, newCommand)
            } catch (error) {
                console.log(error)
                msg.channel.send(
                    `There was an error while reloading a command \`${command.cmdName}\`:\n\`${error.msg}\``
                )
            }
            return msg.channel.send(
                `The \`${command.cmdName}\` Command was reloaded!`
            )
        }
    )
