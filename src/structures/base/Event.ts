import { ClientEventsTYPE, clientClass } from "../library";

export abstract class Event<T extends keyof ClientEventsTYPE> {
  name?: T;
  protected _path?: string;
  protected client: clientClass;
  protected constructor(client: clientClass) {
    this._path = undefined;
    this.client = client;
  }
  abstract execute(
    client: clientClass,
    ...args: ClientEventsTYPE[T][]
  ): Promise<unknown> | unknown;
}
