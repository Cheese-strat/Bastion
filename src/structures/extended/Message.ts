import { Structures, Message } from "discord.js";
export default () =>
    Structures.extend(
        "Message",
        (message) =>
            class extends Message {
                public command: string
                public args:string[]
                private A:string[] = this.content.split(/ +/g)
                constructor() {
                    super(arguments[0], arguments[1], arguments[2]);
                    this.command = this.A[0]
                    this.args = this.A.slice(1)
                }
            }
    );