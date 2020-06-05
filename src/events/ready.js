'use strict';
module.exports = (client) => {
    console.log(`bot is running. logged in as ${client.user.tag}`);
    client.user.setPresence({ activity: { name: 'on the floor' }, status: 'idle' })
    client.channels.fetch(`678586548978974739`).then(chan => chan.send(`${client.user.tag} is running`))
}