'use strict';
import { writeFile } from 'fs';
export default (path:string, data:object) => {
    //if (typeof data !== "object") throw new Error(`passed parameter was of type ${typeof data}, expected object`)
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
        set: (obj, prop, value):true => {
            Object.defineProperty(obj, prop, value)
            write();
            return true
        }
    })
}