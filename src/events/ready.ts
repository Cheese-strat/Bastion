import { TextChannel } from "discord.js";
import clientClass from "../structures/client";
export default async (client: clientClass) => {
    if (client.user === null) return console.log(`the clientUser is null`);
    console.log(`bot is running. logged in as ${client.user.tag}`);
    client.user.setPresence({ activity: { name: 'on the floor' }, status: 'idle' });
    const channel = await client.channels.fetch(`678586548978974739`) as TextChannel
    channel.send(`${client.user.tag} is running`)
}