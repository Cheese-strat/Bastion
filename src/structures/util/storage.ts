import { writeFile } from 'fs';
import { storageTYPE, storageGuildTYPE } from '../library';

type writing = (path:string, guildID:string, data:storageGuildTYPE)=>storageGuildTYPE
type singleGuild = (path:string, guildID:string)=>storageGuildTYPE
type allGuilds = (path:string, guildID:null)=>storageTYPE

export const storage = (path:string, guildID: string | null, data?: object):storageGuildTYPE|storageTYPE => {
    const json: storageTYPE = require(`${path}storage.json`);
    if (typeof guildID !== "string") return json
    if (typeof data === "undefined") {
        if (!Object.keys(json).includes(guildID)){
            return storage(path, guildID, defaultOBJ)
        }
        return json[guildID] as storageGuildTYPE
    } else this
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
