'use strict';
var readdirSync = require("fs").readdirSync;
module.exports = function (client) {
    /*for (const fileName of readdirSync(`./src/commands`).filter(f => f.endsWith(".js"))) {
        const commandName = fileName.slice(0, fileName.length - 3)
        const commandOBJ = require(`${client.path}/commands/${fileName}`)
        commandOBJ.name = commandName
        client.commands.set(commandName, commandOBJ)
        console.log(`found command: ${commandOBJ.name}`)
    }*/
    for (var _i = 0, _a = require("fs").readdirSync(client.path + "/commands").filter(function (folder) { return !folder.includes("."); }); _i < _a.length; _i++) {
        var Folder = _a[_i];
        for (var _b = 0, _c = require("fs").readdirSync(client.path + "/commands/" + Folder).filter(function (file) { return file.endsWith(".js"); }); _b < _c.length; _b++) {
            var fileName = _c[_b];
            var commandOBJ = require(client.path + "/commands/" + Folder + "/" + fileName);
            commandOBJ.category = Folder;
            client.commands.set(commandOBJ.name, commandOBJ);
            console.log("found command: " + commandOBJ.name);
        }
    }
};
