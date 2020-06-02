const { writeFile } = require('fs');

module.exports = (path, data) => {
    const data = require(`${path}/storage.json`);
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