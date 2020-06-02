const Discord = require("discord.js")
const ez = require("../ez.js")
module.exports = (client, data, pokemon, config) => {
    console.log(`bot is running. logged in as ${client.user.tag}`);
    client.user.setActivity(`In the woods of germany`);
    client.channels.fetch(`678586548978974739`).then(chan=>chan.send(`${client.user.tag} is running`))
    setInterval(i => {
        var date = new Date()
        var Reminders;
        var time = date.getHours().toString() + date.getMinutes().toString()
        if (!client.cooldowns.has(Reminders)) {
            client.cooldowns.set(Reminders, new Discord.Collection());
        }
        const reminders = client.cooldowns.get(Reminders);
        for (x in data) {
            data[x].reminders.forEach(reminder => {
                if (time === reminder.time) {
                    if (reminders.has(reminder)) return
                    reminders.set(reminder);
                    setTimeout(d => reminders.delete(reminder), 60000);
                    if (client.channels.get(reminder.target) == undefined) {
                        if (ez.getuser(reminder.target) == undefined) return msg.channel.send("I could not find the correct target,\nplease mention a channel, a user or the id of either")
                        var target = ez.getuser(reminder.target)
                    } else {
                        var target = client.channels.get(reminder.target)
                    }
                    target.send(reminder.message)
                }
            });
        }
    }, 55000);
}