import {
  Command,
  clientClass,
  MessageTYPE,
  CMDPermsObj,
} from "../../structures/library";

export default class extends Command {
  cmdName = "coinflip";
  description = "Randomly flips a coin for you";
  category = "";
  args = {
    required: false,
    case: false,
    usage: "",
  };
  cooldown = 3;
  aliases = ["flip", "coin"];
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
      `"The coin landed on "${Math.random() > 0.5 ? "Coins" : "Heads"}!`
    );
  }
}
