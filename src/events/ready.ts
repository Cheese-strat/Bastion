import { clientClass, Event } from "../structures/library"

export default class readyEVENT extends Event<"ready"> {
  name:"ready" = "ready"
  _path: string | undefined = undefined
  constructor(client: clientClass) {
    super(client);
  }
  
  async execute(client:clientClass) {
    console.log(`bot is running. logged in as ${client.user!.tag}`);
    await client.user!.setPresence({ activity: { name: 'on the floor' }, status: 'idle' });
    /* const channel = await client.getLogChannel()
    await channel.send(`${client.user.tag} is running`) */
  }
}