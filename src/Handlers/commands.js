'use strict';
exports.__esModule = true;
var fs_1 = require("fs");
exports["default"] = (function (client) {
    for (var _i = 0, _a = fs_1.readdirSync(client.path + "/commands").filter(function (folder) { return !folder.includes("."); }); _i < _a.length; _i++) {
        var Folder = _a[_i];
        for (var _b = 0, _c = fs_1.readdirSync(client.path + "/commands/" + Folder).filter(function (file) { return file.endsWith(".ts"); }); _b < _c.length; _b++) {
            var fileName = _c[_b];
            var commandOBJ = require(client.path + "/commands/" + Folder + "/" + fileName);
            commandOBJ.category = Folder;
            client.commands.set(commandOBJ.name, commandOBJ);
            console.log("found command: " + commandOBJ.name);
        }
        ;
    }
    ;
});
