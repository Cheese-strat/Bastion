'use strict';
var Discord = require("discord.js");
var data = require("../storage.json");
var storage = require("../structures/storage.js");
module.exports = function (client, msg) {
    if (msg.guild == undefined) {
        if (!msg.author.bot) {
            client.channels.fetch("629683449976061971").then(function (channel) {
                channel.send({
                    embed: {
                        color: 3447003,
                        author: {
                            name: msg.author.username,
                            icon_url: msg.author.avatarURL
                        },
                        title: "DM'd me a message:",
                        description: msg.content,
                        timestamp: new Date(),
                        footer: {
                            text: "id: " + msg.author.id,
                        },
                    }
                });
            });
        }
        return;
    }
    var config = client.config;
    if (data[msg.guild.id] == undefined) {
        data[msg.guild.id] = {
            logs: {
                "id": "NULL",
                "badwords": "on",
                "allmsg": "on",
                "newusers": "on",
                "channelu": "on",
                "useru": "on"
            },
            "prefix": config.prefix,
            "reminders": [],
            "banwords": [],
            "channels": {}
        };
        console.log("writing " + msg.guild.name + " to the file");
        storage("../src/structures/storage.js", data); //src\structures\storage.js
    }
    if (msg.author.bot || !msg.guild.me.permissionsIn(msg.channel).has("SEND_MESSAGES"))
        return;
    if (data[msg.guild.id].logs.id != "NULL") {
        data[msg.guild.id].banwords.forEach(function (ele) {
            if (msg.content.toLowerCase().includes(ele)) {
                msg.channel.send("You cannot use the word: `" + ele + "` in this server!");
                msg.delete()
                    .then(function () {
                    h;
                    if (data[msg.guild.id].logs.id != "NULL") {
                        client.channels.cache.get(data[msg.guild.id].logs.id).send(msg.author.tag + " used the banned word: `" + ele + "` in <#" + msg.channel.id + ">");
                    }
                })
                    .catch(function () {
                    if (data[msg.guild.id].logs.id != "NULL")
                        return client.channels.cache.get(data[msg.guild.id].logs.id).send("I do not have the correct permissions to delete messages in <#" + msg.channel.id + ">.");
                });
            }
        });
    }
    if ((msg.mentions.users.size > 0) && msg.content.includes(client.user.id + ">"))
        msg.channel.send("my prefix in this server is: " + data[msg.guild.id].prefix);
    if (!msg.content.startsWith(data[msg.guild.id].prefix))
        return;
    if (!msg.guild.me.permissionsIn(msg.channel).has('EMBED_LINKS'))
        return msg.channel.send("I need the `Embed Links` permission.");
    var args = msg.content.slice(data[msg.guild.id].prefix.length).trim().split(/ +/);
    var commandName = args.shift().toLowerCase();
    msg.flags = [];
    args.forEach(function (arg) {
        if (arg.startsWith(config.flagprefix)) {
            args.filter(function (a) { return a.startsWith(config.flagprefix); });
            var flag = arg.slice(config.flagprefix.length, arg.length);
            msg.flags.push(flag);
        }
    });
    args.filter(function (a) { return msg.flags.includes(config.flagprefix + a); });
    if (commandName === "crash" && config.developers[msg.author.id] >= 4)
        throw new Error("Crashing on authorization of " + msg.author.tag);
    var command = client.commands.get(commandName) || client.commands.find(function (cmd) { return cmd.aliases && cmd.aliases.includes(commandName); });
    if (!command)
        return;
    if (command.args && !args.length) {
        var reply = "You didn't give me any arguments, " + msg.author + "!";
        if (command.usage) {
            reply += "\nThe correct usage is: `" + data[msg.guild.id].prefix + command.name + " " + command.usage + "`";
        }
        return msg.channel.send(reply);
    }
    if (command.perms) {
        if (!command.perms.every(function (permFlag) {
            msg.guild.me.permissionsIn(msg.channel).has(permFlag);
        }))
            return msg.channel.send("I dont have the correct permissions to use this command");
        if (!command.perms.every(function (permFlag) {
            msg.member.permissionsIn(msg.channel).has(permFlag);
        }))
            return msg.channel.send("You dont have the correct permissions to use this command");
    }
    if (!msg.guild.me.permissionsIn(msg.channel).has('ADMINISTRATOR') && command.admin)
        return msg.channel.send("You must have administrator permission to use this command");
    if (command.category === "Developer" && !config.developers.includes(msg.author.id))
        return msg.channel.send("only developers can use that command!");
    if (!command.Case)
        args.map(function (x) { return x.toLowerCase(); });
    if (command.poke) {
        if (args.length > command.usage.split("> <").length) {
            value = args[0] + args[1];
            args.shift();
            args[0] = value;
        }
        args[0] = ez.findpokemon(args[0]);
    }
    if (!client.cooldowns.has(command.name))
        client.cooldowns.set(command.name, new Discord.Collection());
    var now = Date.now();
    var timestamps = client.cooldowns.get(command.name);
    var cooldownAmount = (command.cooldown || 3) * 1000;
    if (timestamps.has(msg.author.id)) {
        var expirationTime = timestamps.get(msg.author.id) + cooldownAmount;
        if (now < expirationTime) {
            var timeLeft = (expirationTime - now) / 1000;
            return msg.reply("please wait " + timeLeft.toFixed(1) + " more second(s) before reusing the " + command.name + " command.");
        }
    }
    else {
        timestamps.set(msg.author.id, now);
        setTimeout(function () { return timestamps.delete(msg.author.id); }, cooldownAmount);
    }
    try {
        console.log(command);
        command.execute(msg, args, client);
        console.log("executed command: " + command.name);
    }
    catch (error) {
        client.channels.cache.get("629683449976061971").send("<@625149330348703744> \n command: " + msg.content + " \n Error: " + error + " \n channel: <#" + msg.channel.id + "> \n server: " + msg.guild.name);
        console.log("message: " + msg.content + " \n Error: " + error + " \n channel: <#" + msg.channel.id + "> \n server: " + msg.guild.name);
        msg.channel.send("There was an error trying to execute that command!");
    }
};
