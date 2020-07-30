import {Structures} from "discord.js";

export default () =>
    Structures.extend(
        "Message",
        (message) =>
            class extends message {
                public command: string
                public args: string[]
                private readonly A: string[]

                constructor() {

                    super(arguments[0], arguments[1], arguments[2]);
                    this.args = this.content.split(/ +/g);
                    this.command = this.args.shift()

                }

                permissions() {
                    if (this.channel.type === "dm") return console.error(`cannot use permissions method on a direct message`)
                    if (this.channel.type === "news") return console.error(`this permissions method is not suited for a news channel`)
                    if (this.guild!.me === null) return console.error(`Please fetch the client guild member before testing permissions`)
                    return this.channel.permissionsFor(this.guild!.me)
                }
            }
    );