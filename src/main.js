const Client = require("./structures/client")
const Commands = require(`./Handlers/commands`)
const Events  = require(`./Handlers/events`)
const config = require("../config.json")
const client = new Client(__dirname, config.client_Options)
console.log(`initializing Discord bot`)
client.run(Events, Commands, config.token)
process.on('unhandledRejection', e => console.error(e));