module.exports = {
    name: 'reminders',
    description: 'see all your reminders',
    cooldown: 3,
    args: false,
    admin: true,
    execute: function (msg, args, pokemon, data, client) {
        if (data[msg.guild.id].reminders.length < 1)
            return msg.channel.send("You have no reminders set for this server!");
        var Embed = {
            color: 0x866b6d,
            title: 'Your reminders',
            description: "you can add a new reminder with: " + data[msg.guild.id].prefix + "reminder",
            fields: [],
        };
        data[msg.guild.id].reminders.forEach(function (reminder) {
            Embed.fields.push({
                name: 'target id: ' + reminder.target,
                value: "message: " + reminder.message /*\nTime: ${reminder.time}`*/,
                inline: true,
            });
        });
        msg.channel.send({
            embed: Embed
        });
    }
};
