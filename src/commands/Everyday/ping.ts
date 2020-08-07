import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "ping";
    description = 'Pings the bot and the discord API to test reaction time and latency';
    category = "";
    args = {
        required: false,
        case: false,
        usage: ""
    };
    cooldown = 2;
    aliases = ["pong"];
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
        msg.channel.send("Ping!").then(m => {
            m.edit('Pong! Latency is ' + (m.createdTimestamp - msg.createdTimestamp) + 'ms. API Latency is ' + Math.round(client.ws.ping) + 'ms');
        });
    }
}