const {readdirSync} = require("fs")
module.exports = (client) => {
    console.log(readdirSync("./"))
}