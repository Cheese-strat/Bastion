import { writeFile } from 'fs';
import { normalize } from "path"
function _addProp(o: object, k: string, val: any) {
    if (typeof val === "object") {
        for (const key in val) {
            _addProp(o[k], key, o[k][key])
        }
    } else Object.defineProperty(o, k, val)
    return o
}

export default (direction: string, guildID: string|null, data?: object) => {

    const json = require(normalize("/"+direction+"/storage.json"))
    if (guildID===null) return json
    let queue = Promise.resolve();
    _addProp(json, guildID, data)

    const write = () => {
        queue = queue.then(() => new Promise(res =>
            writeFile(normalize(__dirname + "/.." + "storage.json"), JSON.stringify(json, null, 2), err => {
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