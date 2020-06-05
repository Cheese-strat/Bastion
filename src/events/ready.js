module.exports = (client, data, pokemon, config) => {
    console.log(`bot is running. logged in as ${client.user.tag}`);
    client.user.setActivity(`In the woods of germany`);
    client.channels.fetch(`678586548978974739`).then(chan => chan.send(`${client.user.tag} is running`))
}