import { writeFile } from 'fs';
import { normalize } from 'path';
import { storageTYPE, storageGuildTYPE , guildObject} from '../library';

export function storage(path:string, guildID?:never, data?:never):storageTYPE
export function storage(path:string, guildID:string, data?:never):storageGuildTYPE
export function storage(path:string, guildID:string, data:storageGuildTYPE):storageGuildTYPE
export function storage(path:string, guildID:any, data?: any):any {
    const json: storageTYPE = require(normalize(`${path}/storage.json`));
    if (typeof guildID !== "string") return json
    if (typeof data === "undefined") {
        if (!Object.keys(json).includes(guildID)){
            return storage(path, guildID, guildObject )
        }
        return json[guildID] as storageGuildTYPE
    }
    Object.defineProperty(json, guildID, data as object);
    let queue = Promise.resolve();


    const write = () => {
        queue = queue.then(() => new Promise(res =>
            writeFile(path, JSON.stringify(json, null, 2), (err: any) => {
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
