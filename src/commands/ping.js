module.exports = {
    run(message, args, client) {
        message.channel.send("pinging...").then(msg => {
            msg.edit(`Pong! ping is ${Date.now() - message.createdTimestamp}ms\napi latency is ${client.ws.ping}ms`)
        })
    }
}