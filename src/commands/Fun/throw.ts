import {
  Command,
  clientClass,
  MessageTYPE,
  CMDPermsObj,
} from "../../structures/library";

export default class extends Command {
  cmdName = "throw";
  description =
    "Throws someone against the wall, for when they start talking about your dogs.";
  category = "";
  args = {
    required: true,
    case: true,
    usage: "<target>",
  };
  cooldown = 3;
  aliases = ["yeet", "hurl"];
  permissions: CMDPermsObj = {
    send: true,
    embed: false,
    react: false,
    delete: false,
    bot: [],
    auth: [],
  };
  constructor(client: clientClass) {
    super(client);
  }
  async run(_client: clientClass, msg: MessageTYPE) {
    const member = await msg.guild.getMember(msg.args.join(" "));
    if (!member) return msg.channel.send("Please mention a valid user");
    return msg.channel.send(
      `${msg.author.username} throws ${member.toString()} against the wall`
    );
  }
}
