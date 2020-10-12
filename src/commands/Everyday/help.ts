import {
  Command,
  MessageTYPE,
  clientClass,
  CMDPermsObj,
} from "../../structures/library";
import { Collection, MessageEmbed } from "discord.js";

export default class extends Command {
  cmdName = "help";
  description = "List all of my commands or info about a specific command.";
  args = {
    required: false,
    case: false,
    usage: "<command name>",
  };
  cooldown = 5;
  aliases = ["commands", "h"];
  permissions: CMDPermsObj = {
    send: true,
    embed: true,
    react: false,
    delete: false,
    bot: [],
    auth: [],
  };
  constructor(client: clientClass) {
    super(client);
  }
  run(client: clientClass, msg: MessageTYPE) {
    msg.args.join(" ");
    let prefix = "b!";
    let data = [];

    const commands: Collection<string, Command> = client.commands;
    if (!msg.args.length) {
      //const embed = ez.embed(msg.member.displayHexColor, "My commands:")
      /*for (const commFolder of fs.readdirSync("./commands")) {
				console.log(commFolder)
				embed.addField(commFolder, info.desc)
			}*/
      //embed.setDescription(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
      //embed.addField(`Here\'s a list of all my commands:${commands.map(command => command.name).join(', ')}\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)

      return msg.author
        .send(
          `**My Commands:** \nYou can send \`${prefix}help [command name]\` to get info on a specific command!\mHere\'s a list of all my commands:${commands
            .map((command) => command.cmdName)
            .join(
              "\n"
            )}\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`
        )
        .then(() => {
          msg.reply(`I've sent you a DM!`);
        })
        .catch((error) => {
          client
            .getLogChannel("629683449976061971")
            .then((x) =>
              x.send(`Could not send help DM to ${msg.author.tag}.\n`, error)
            );
          console.log(error);
          msg.reply("it seems like I can't DM you! Do you have DMs disabled?");
        });
    }
    if (isNaN(Number(msg.args))) {
      const name = msg.args[0].toLowerCase();
      const command =
        commands.get(name) ||
        commands.find((c) => c.aliases && c.aliases.includes(name));
      if (!command) return msg.reply("that's not a valid command!");
      const Embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Some title")
        .setDescription("Some description here")
        .setTimestamp()
        .setFooter(
          "Some footer text here",
          client.user!.displayAvatarURL({ dynamic: true, format: "png" })
        );

      let categories = commands
        .map((c) => c.category)
        .filter(
          (category) =>
            commands.map((c) => c.category).filter((cat) => cat === category)
              .length === 1
        );

      for (let x = 0; x > categories.length; x++) {
        Embed.addField(`Page: ${x}`, `${categories[x]} commands`);
      }
      categories.forEach((category) => {
        Embed.addField(category, "Some value here");
      });

      return msg.channel.send(Embed);
    }
    return msg.channel.send("beans");
  }
}
