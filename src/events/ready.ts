import { clientClass } from "../structures/library";
export default async (client: clientClass) => {
    if (client.user === null) return console.log(`the clientUser iis not logged in yet`);
    console.log(`bot is running. logged in as ${client.user.tag}`);
    client.user.setPresence({ activity: { name: 'on the floor' }, status: 'idle' });
    const channel = await client.getLogChannel()
    channel.send(`${client.user.tag} is running`)
}