var update = require("../../ez.js").update;
module.exports = {
    name: 'reminder',
    description: 'set a reminder to go off at a specific time',
    cooldown: 10,
    args: true,
    admin: true,
    usage: "<time> <where> <message>",
    execute: function (msg, args, pokemon, data, client) {
        var time = args[0];
        if (time.includes(":")) {
            time.split(":");
            time[0].slice(-2);
            time[1].slice(0, 2);
            var now = new Date();
            now.split(" ");
            var month = now[1];
            var day = now[2];
            var year = now[3];
            var date = new Date(year, month, day, time[0], time[1], 0, 0);
        }
        else {
            time.slice(0, 4);
        }
        if (Number(time) == NaN || time.length > 4)
            return msg.channel.send("please enter the correct data formatting: 12:30 or 1230 (24 hour time)");
        if (args[1] == undefined)
            return msg.channel.send("You need to enter a place to send it...");
        if (args[1].startsWith('<@') && args[1].endsWith('>')) {
            var user = args[1].slice(2, -1);
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
            var target = client.users.get(mention);
        }
        if (args[1].startsWith('<#') && args[1].endsWith('>')) {
            var channel = args[1].slice(2, -1);
            var target = client.channels.get(channel);
            if (!target.memberPermissions(msg.author).has('SEND_MESSAGES'))
                return msg.channel.send("You dont have permission to select that channel!");
        }
        if (args[1].startsWith('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0')) {
            var target = client.channels.get(channel);
            if (client.channels.get(args[1]) == undefined) {
                if (client.users.get(args[1]) == undefined)
                    return msg.channel.send("I could not find the correct target,\nplease mention a channel, a user or the id of either");
                var target = client.users.get(args[1]);
            }
            else {
                var target = client.channels.get(args[1]);
            }
            if (!target.memberPermissions(msg.author).has('SEND_MESSAGES'))
                return msg.channel.send("You dont have permission to select that channel!");
        }
        args.slice(2);
        var message = args.join(" ");
        client.users.forEach(function (user) {
            if (message.includes("<@" + user.id + ">" || "<@!" + user.id + ">"))
                return msg.channel.send("make sure you have permission from <@" + user.id + "> before making them a reminder");
        });
        client.channels.forEach(function (channel) {
            if (message.includes("<@" + channel.id + ">"))
                return msg.channel.send("make sure you have permission from <@" + user.id + "> before making them a reminder");
        });
        data[msg.guild.id].reminders.push({
            "time": time,
            "author": msg.author.id,
            "target": target.id,
            "message": message
        });
        update(data);
        msg.channel.send("I have added your reminder!");
    }
};
