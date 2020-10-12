import { readdirSync } from 'fs'
import { normalize } from 'path'
import { clientClass, Command } from '../structures/library'
export default (client: clientClass) => {
    for (const Folder of readdirSync(
        normalize(`${client.srcPath}/commands/`)
    ).filter((folder) => !folder.includes('.'))) {
        console.log(`Folder: ${Folder}`)
        for (const fileName of readdirSync(
            `${client.srcPath}/commands/${Folder}`
        ).filter((file) => file.endsWith('.js'))) {
            const { default: commandOBJ } = require(normalize(
                `${client.srcPath}/commands/${Folder}/${fileName}`
            ))
            const CMD = new commandOBJ(client)
            CMD.category = Folder
            client.commands.set(CMD.cmdName, CMD)
            console.log(`found command: ${CMD.cmdName}`)
        }
    }
}
