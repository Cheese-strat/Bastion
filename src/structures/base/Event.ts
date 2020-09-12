import { Client, ClientEvents } from 'discord.js';
import { existsSync } from 'fs';
import { clientClass } from "../client/client";
import { ClientEventsTYPE } from '../client/types';

export abstract class Event {
    abstract name: keyof ClientEventsTYPE
    protected _path: string | undefined
    protected client: clientClass
    abstract execute(...args: ClientEventsTYPE[keyof ClientEventsTYPE]): void
    protected constructor(client: clientClass) {
        this._path = undefined
        this.client = client
        return this
    }
    get active(): boolean {
        return (this.client.user && this._path) ? true : false
    }
    get path(): string | undefined {
        if (!this._path) console.log(`Path is not set for ${this.name} event`);
        return this._path
    }

    set path(str) {
        if (typeof str !== "string") throw new Error(`Path cannot be set, expected type String, got: ${typeof str}`)
        if (existsSync(str) && str.endsWith("/src/")) throw new Error(`Path not found: ${str}`);
        this._path = str
    }
}