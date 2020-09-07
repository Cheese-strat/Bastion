import { Client, ClientEvents } from 'discord.js';
import { clientClass } from "../client/client";
import { ClientEventsTYPE } from '../client/types';
export abstract class Event {
    abstract name: keyof ClientEventsTYPE
    protected path: string
    protected client: clientClass
    abstract execute(...args: ClientEventsTYPE[keyof ClientEventsTYPE]): void
    protected constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
    }
}