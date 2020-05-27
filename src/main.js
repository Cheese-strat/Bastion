const {readdirSync} = require("fs");
const client = require("./Handlers/client")();
readdirSync("./Handlers").forEach(file=>require(`./Handlers/${file}`)(client));
console.log(`initializing Discord bot`, process.config)