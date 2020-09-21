import {
  Client,
  Collection,
  ClientOptions,
  TextChannel,
  User,
} from "discord.js";
import { readFileSync } from "fs";
import {
  Event,
  Command,
  storageGuildTYPE,
  storageTYPE,
  storage as store,
} from "../library";
import { ClientEventsTYPE } from "./types";

export class clientClass extends Client {
  commands: Collection<string, Command>;
  cooldowns: Collection<string, any>;
  events: Collection<string, Event<keyof ClientEventsTYPE>>;
  srcPath: string;
  constructor(basepath: string, options: ClientOptions = {}) {
    super(options);
    this.commands = new Collection();
    this.cooldowns = new Collection();
    this.events = new Collection();
    this.srcPath = basepath;
  }

  public get developers(): string[] {
    const read: string = readFileSync(`config.json`, "utf8");
    return JSON.parse(read).developers;
  }

  public get config(): any {
    const read = readFileSync(`config.json`, "utf8");
    return JSON.parse(read);
  }

  public async getLogChannel(id?: string): Promise<TextChannel> {
    const channel = await this.channels.fetch(id || this.config.logChannel);
    if (channel.type === "text") return channel as TextChannel;
    throw new Error(
      `expected logChannel of type text, store or news. received: ${channel.type}, id: ${id}`
    );
  }

  public async getUser(str: string): Promise<User | undefined> {
    let User = await this.users.fetch(str).catch((x) => console.log(x.message));

    return User || this.users.cache.find((u) => u.username === str);
  }

  public DB(guildID?: never, data?: never): storageTYPE;
  public DB(guildID: string, data?: never): storageGuildTYPE;
  public DB(guildID: string, data: storageGuildTYPE): storageGuildTYPE;
  public DB(guildID: any, data: any): any {
    return data
      ? store(this.srcPath, guildID, data)
      : store(this.srcPath, guildID);
  }

  public start(
    eventFunc: (client: this) => any,
    _commFunc: (client: this) => any,
    token: string
  ) {
    if (token.split(".").length < 2)
      throw new Error(`expected a string token. received: ${token}`);
    //commFunc(this);
    eventFunc(this);
    this._startEvents();
    this.login(token);
    return this;
  }
  private _startEvents() {
    this.events.forEach((Event) =>
      this.on(
        Event.name as keyof ClientEventsTYPE,
        Event.execute.bind(Event, this) as any
      )
    );
  }
}
