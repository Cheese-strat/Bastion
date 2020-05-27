const { readdirSync } = require("fs")

module.exports = (client) => {
    for (const fileName of readdirSync(`./src/events`).filter(f => f.endsWith(".js"))) {
        const event = require(`${client.path}/events/${fileName}`)
        const eventName = fileName.slice(0, fileName.length - 3)
        client.on(eventName, event.bind(null, client))
        console.log(`found event: ${eventName}`)
    }
}