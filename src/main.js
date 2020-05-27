const {readdirSync} = require("fs");
const Client = require("./structures/client")
const Commands = require(`./Handlers/commands`)
const Events  = require(`./Handlers/commands`)
const client = new Client(Events, Commands)
console.log(`initializing Discord bot`)