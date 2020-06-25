'use strict';
exports.__esModule = true;
var fs_1 = require("fs");
exports["default"] = (function (client) {
    fs_1.readdirSync("./src/events").filter(function (f) {
        return f.endsWith(".js");
    }).forEach(function (fileName) {
        var file_name = fileName.split(".")[0];
        var cmdFile = require(client.path + "/events/" + fileName);
        var binded = cmdFile.bind(null, client);
        client.on(file_name, binded);
    });
});
