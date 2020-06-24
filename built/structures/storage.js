'use strict';
var writeFile = require('fs').writeFile;
module.exports = function (path, data) {
    if (typeof data !== "object")
        throw new Error("passed parameter was of type " + typeof data + ", expected object");
    var queue = Promise.resolve();
    var write = function () {
        queue = queue.then(function () { return new Promise(function (res) {
            return writeFile(path, JSON.stringify(data, null, 2), function (err) {
                if (!err)
                    return res();
                throw err;
            });
        }); });
    };
    return new Proxy(data, {
        set: function (obj, prop, value) {
            obj[prop] = value;
            write();
        }
    });
};
