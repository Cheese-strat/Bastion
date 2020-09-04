import { clientClass } from "../client/client";
import { ClientEventsTYPE } from '../client/types';
export abstract class Event {
    abstract name: keyof ClientEventsTYPE
    path: string
    client: clientClass
    abstract execute(...args: ClientEventsTYPE[keyof ClientEventsTYPE]): any
    protected constructor(path: string, client: clientClass) {
        this.path = path
        this.client = client
    }
}