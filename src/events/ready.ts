import { clientClass, Event } from "../structures/library"

export default class readyEVENT extends Event {
  name: "ready" = "ready"
  _path: string | undefined = undefined
  client: clientClass;
  constructor(client: clientClass) {
    super(client);
    this.client = client;
    return this;
  }
  
  async execute() {
    if (this.client.user === null) return console.log(`the clientUser is not logged in yet`);
    console.log(`bot is running. logged in as ${this.client.user.tag}`);
    await this.client.user.setPresence({ activity: { name: 'on the floor' }, status: 'idle' });
    const channel = await this.client.getLogChannel()
    await channel.send(`${this.client.user.tag} is running`)
  }
}