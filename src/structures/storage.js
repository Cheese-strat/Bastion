const { writeFile } = require('fs');

module.exports = (onError) => {
    const data = require("../storage.json");
    let queue = Promise.resolve();

    const write = () => {
        queue = queue.then(() => new Promise(res =>
            writeFile(path, JSON.stringify(data, null, 2), err => {
                if (!err) return res();
                if (onError) return onError(err);
                throw err;
            })
        ))
    }

    return new Proxy(data, {
        set: (obj, prop, value) => {
            obj[prop] = value;
            write();
        }
    })
}