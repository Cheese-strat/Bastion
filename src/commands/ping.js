const Command = require("../structures/Command.js")
module.exports = class extends Command{
    run(message, args, client) {
        message.channel.send("pinging...").then(msg => {
            msg.edit(`Pong! ping is ${Date.now() - message.createdTimestamp}ms\napi latency is ${client.ws.ping}ms`)
        })
    }
}