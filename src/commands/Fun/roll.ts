import {
  Command,
  clientClass,
  MessageTYPE,
  CMDPermsObj,
} from "../../structures/library";

export default class extends Command {
  cmdName = "roll";
  description =
    "Rolls a dice of any number of sides and gives a randomized result";
  category = "";
  args = {
    required: false,
    case: false,
    usage: "<number of sides>",
  };
  cooldown = 1;
  aliases = ["dice", "die"];
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
  run(_client: clientClass, msg: MessageTYPE) {
    return msg.channel.send(
      "You rolled a " +
        (Math.floor(Math.random() * Number(msg.args[0]) || 6) + 1).toString()
    );
  }
}
