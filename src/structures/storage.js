const { writeFile } = require('fs');

module.exports = (path, onError) => {
    const data = require(path);
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