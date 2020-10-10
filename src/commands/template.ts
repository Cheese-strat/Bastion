import {
  Command,
  clientClass,
  messageTYPE,
  CMDPermsObj,
  /** @ts-ignore */
} from "../../structures/library";

export default class extends Command {
  name = "";
  description = "";
  category = "";
  args = {
    required: false,
    case: false,
    usage: "",
  };
  cooldown = 0;
  aliases = ["adwoiajdoaj"];
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
  run(client: clientClass, msg: messageTYPE) {}
}
