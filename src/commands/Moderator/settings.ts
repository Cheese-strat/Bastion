import { Command, clientClass, messageTYPE, CMDPermsObj } from "../../structures/library";

export default class extends Command {
    name = "settings"
    description = "Settings for your server, the category options are: logging"
    category = "";
    args = {
        required: true,
        case: false,
        usage: "<category>"
    };
    cooldown = 1
    aliases = ["options","setup"];
    permissions: CMDPermsObj = {
        send: true,
        embed: true,
        react: false,
        delete: false,
        bot: [],
        auth: []
    };
    constructor(path: string, client: clientClass) {
        super(path, client)
    }
    run(client: clientClass, msg: messageTYPE) {
if (args.join(" ").includes("log")) {
			msg.channel.send({
				embed: {
					color: Math.floor(Math.random() * 16777214) + 1,
					title: 'Settings!',
					description: 'you can change any of the settings by reacting with the corresponding emojis',
					fields: [{
							name: 'Logging channel: 📡',
							value: `<#${data[msg.guild.id].logs.id}>`,
							inline: true,
						},
						{
							name: 'Logs whenever Bad words were used and deleted: 🙉',
							value: data[msg.guild.id].logs.badwords,
							inline: true,
						},
						{
							name: 'message deletion and edits: 👌',
							value: data[msg.guild.id].logs.allmsg,
							inline: true,
						},
						{
							name: 'New User joining: 🎉',
							value: data[msg.guild.id].logs.newusers,
							inline: true,
						},
						{
							name: 'Channel updates: 👩‍🍳',
							value: data[msg.guild.id].logs.channelu,
							inline: true,
						},
						{
							name: 'User Updates: 💇‍♂️',
							value: data[msg.guild.id].logs.useru,
							inline: true,
						}
					],
					timestamp: new Date(),
				}
			}).then(m => {
				var list = ["💇‍♂️", "👩‍🍳", "🎉", "👌", "🙉", "📡"]
				list.forEach(emoji => m.react(emoji).then(e=>setTimeout(()=>e.remove(client.user), 15000)))
				const filter = (reaction, user) => {
					return (list.includes(reaction.emoji.name) && user.id == msg.author.id)
				};
				const collector = m.createReactionCollector(filter, {
					time: 15000
				});
				collector.on("collect", reaction => {
					switch (reaction.emoji.name) {
						case "📡":
							msg.channel.send("please mention the channel you want to set as the log channel").then(() => {
								m.channel.awaitMessages(response => response.content.length > 10, {
										max: 1,
										time: 30000,
										errors: ['time'],
									})
									.then((c) => {
										content = c.first().content
										if (content.startsWith('<#') && content.endsWith('>')) {
											var channel = content.slice(2, -1);
											var target = msg.guild.channels.get(channel);
										} else {
											var target = msg.guild.channels.get(content)
										}

										if (target == undefined) return msg.channel.send("Could not find that channel, try mention the channel or the id of a channel in this server that i can see")
										if (!msg.channel.memberPermissions(client.user).has('VIEW_CHANNEL')) return msg.channel.send("Please check the permissions for that channel first, i cant seem to see it")
										data[msg.guild.id].logs.id = target.id
										msg.channel.send(`This servers logs channel has been set to: ${target.id}`)
									})
									.catch(() => msg.channel.send('You took too long!'));
							});
							break;
						case "🙉":
							if (data[msg.guild.id].logs.badwords === "off") {
								data[msg.guild.id].logs.badwords = "on"
								msg.channel.send("The deletion of bad-words will now be logged")
							} else {
								data[msg.guild.id].logs.badwords = "off"
								msg.channel.send("The deletion of bad-words will no longer be logged")
							}
							break;
						case "👌":
							if (data[msg.guild.id].logs.allmsg === "off") {
								data[msg.guild.id].logs.allmsg = "on"
								msg.channel.send("Message deletion and edits will now be logged")
							} else {
								data[msg.guild.id].logs.allmsg = "off"
								msg.channel.send("Message deletion and edits will not be logged")
							}
							break;
						case "🎉":
							if (data[msg.guild.id].logs.newusers === "off") {
								data[msg.guild.id].logs.newusers = "on"
								msg.channel.send("New users will now be logged")
							} else {
								data[msg.guild.id].logs.newusers = "off"
								msg.channel.send("New users will not be logged")
							}
							break;
						case "👩‍🍳":
							if (data[msg.guild.id].logs.channelu === "off") {
								data[msg.guild.id].logs.channelu = "on"
								msg.channel.send("Channel updates will now be logged")
							} else {
								data[msg.guild.id].logs.channelu = "off"
								msg.channel.send("Channel updates will no longer be logged")
							}
							break;
						case "💇‍♂️":
							if (data[msg.guild.id].logs.useru === "off") {
								data[msg.guild.id].logs.useru = "on"
								msg.channel.send("User updates will now be logged")
							} else {
								data[msg.guild.id].logs.useru = "off"
								msg.channel.send("User updates will no longer be logged")
							}
							break;
					}

				});
				collector.on("end", () => update(data))
			})
		}
    }
}