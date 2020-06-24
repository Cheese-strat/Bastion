'use strict';
module.exports = function (client) {
    return require("fs").readdirSync("./src/events").filter(function (f) {
        return f.endsWith(".js");
    }).forEach(function (fileName) {
        return client.on(fileName.split(".")[0], (require(client.path + "/events/" + fileName))
            .bind(null, client));
    });
};
