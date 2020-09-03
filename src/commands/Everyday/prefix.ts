import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "prefix";
    description = "Changes the prefix for your server";
    category = "";
    args = {
        required: true,
        case: true,
        usage: "<prefix>"
    };
    cooldown = 2;
    aliases = [];
    permissions: CMDPermsObj = {
        send: true,
        embed: true,
        react: false,
        delete: false,
        bot: [],
        auth: []
    };
    constructor(path: string, client: clientClass) {
        super(path, client)
    }
    run(client: clientClass, msg: messageTYPE) {
        const guildData = client.DB(msg.guild.id)
        if (msg.args[0] === "reset") {
            guildData.prefix = client.config.prefix
            msg.channel.send(`Your prefix has been reset and is now: ${guildData.prefix}`)
        } else {
            guildData.prefix = msg.args[0]
            msg.channel.send(`Your prefix is now: ${guildData.prefix}`)
        }
        client.DB(msg.guild.id, guildData)
    }
}