const { writeFile } = require('fs');

module.exports = (path, data) => {
    if (typeof data !== "object") throw new Error(`passed parameter was of type ${typeof data}, expected object`)
    let queue = Promise.resolve();

    const write = () => {
        queue = queue.then(() => new Promise(res =>
            writeFile(path, JSON.stringify(data, null, 2), err => {
                if (!err) return res();
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