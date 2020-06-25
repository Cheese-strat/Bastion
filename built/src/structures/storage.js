'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (path, data) => {
    let queue = Promise.resolve();
    const write = () => {
        queue = queue.then(() => new Promise(res => fs_1.writeFile(path, JSON.stringify(data, null, 2), err => {
            if (!err)
                return res();
            throw err;
        })));
    };
    return new Proxy(data, {
        set: (obj, prop, value) => {
            Object.defineProperty(obj, prop, value);
            write();
            return true;
        }
    });
};
