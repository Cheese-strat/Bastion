'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (client) => {
    fs_1.readdirSync("./src/events").filter(function (f) {
        return f.endsWith(".js");
    }).forEach(function (fileName) {
        const file_name = fileName.split(".")[0];
        const cmdFile = require(client.path + "/events/" + fileName);
        const binded = cmdFile.bind(null, client);
        client.on(file_name, binded);
    });
};
