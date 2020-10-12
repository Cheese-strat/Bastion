import { MessageEmbed } from "discord.js";
import { clientClass, Command, MessageTYPE } from "../../structures/library";

export default class extends Command {
  cmdName = "avatar";
  description =
    "Shows the pfp of the mentioned user, or the message author if no user is mentioned";
  args = {
    required: false,
    case: false,
    usage: "",
  };
  cooldown = 2;
  aliases = ["pfp", "profile"];
  permissions = {
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

  async run(client: clientClass, msg: MessageTYPE) {
    let user = await client.getUser(msg.args.join(" "));
    if (!msg.args.length) user = msg.author;
    if (!user) return msg.channel.send("I couldn't find that target");
    const embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle(`${user.username}'s avatar:`);
    embed.setImage(
      user.displayAvatarURL({
        format: "png",
      })
    );
    return msg.channel.send(embed);
  }
}
