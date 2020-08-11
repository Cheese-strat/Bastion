import { writeFile } from 'fs';
import { storageTYPE, storageGuildTYPE } from '../library';

export const storage = (path: string, guildID: string | null, data?: object): storageTYPE | storageGuildTYPE => {


    const json: storageTYPE = require(`${path}storage.json`);
    if (!guildID) return json
    if (!data) return json[guildID] as storageGuildTYPE

    Object.defineProperty(json, guildID, data as object);
    let queue = Promise.resolve();


    const write = () => {
        queue = queue.then(() => new Promise(res =>
            writeFile(path, JSON.stringify(json, null, 2), err => {
                if (!err) return res();
                throw err;
            })
        ));
    }
    return new Proxy(json, {
        set: (obj, prop, value): true => {
            Object.defineProperty(obj, prop, value)
            write();
            return true
        }
    })
}