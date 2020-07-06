import { writeFile } from 'fs';
import { storageTYPE } from '../types';

function _addProp(o: any, k: string, val: any) {
    if (typeof val === "object") {
        for (const key in val) {
            _addProp(o[k], key, o[k][key])
        }
    } else Object.defineProperty(o, k, val)
    return o
}

export const storage = (path: string, guildID: string | null, data?: object): storageTYPE => {

    const json = require(path)
    if (guildID === null) return json
    let queue = Promise.resolve();
    _addProp(json, guildID, data)

    const write = () => {
        queue = queue.then(() => new Promise(res =>
            writeFile(path, JSON.stringify(json, null, 2), err => {
                if (!err) return res();
                throw err;
            })
        ))
    }

    return new Proxy(json, {
        set: (obj, prop, value): true => {
            Object.defineProperty(obj, prop, value)
            write();
            return true
        }
    })
}