import { writeFile } from 'fs';
import { storageTYPE, storageGuildTYPE } from '../library';

type wrting = (path:string, guildID:string, data:storageGuildTYPE)=>storageGuildTYPE
type singleGuild = (path:string, guildID:string)=>storageGuildTYPE
type allGuilds = (path:string, guildID:null)=>storageTYPE

export const storage:writing|singleGuild|allGuilds = (path, guildID, data) => {
    const json: storageTYPE = require(`${path}storage.json`);
    if (!guildID) return json
    if (!data) {
        if (!Object.keys(json).includes(guildID)){
            return storage(path, guildID, defaultOBJ)
        }
        return json[guildID] as storageGuildTYPE
    }
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
