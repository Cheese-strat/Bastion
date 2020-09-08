import { Client, ClientEvents } from 'discord.js';
import { existsSync } from 'fs';
import { clientClass } from "../client/client";
import { ClientEventsTYPE } from '../client/types';

export abstract class Event {
    abstract name: keyof ClientEventsTYPE
    protected _path: string | undefined
    protected client: clientClass
    abstract execute(...args: ClientEventsTYPE[keyof ClientEventsTYPE]): void
    protected constructor(path: string, client: clientClass) {
        this._path = path
        this.client = client
    }
    get path() {
        if (this._path === "") {
            console.log(`Path is not set for ${this.name} event`);
            return undefined;
        }
        return this._path
    }

    set path(str) {
        if (typeof str !== "string") throw new Error(`Path cannot be set, expected type String, got: ${typeof str}`)
        if (existsSync(str) && str.endsWith("/src/")) throw new Error(`Path not found: ${str}`);
        this._path = str
    }
}