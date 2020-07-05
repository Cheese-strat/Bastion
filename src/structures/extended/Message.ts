import { Structures } from "discord.js";
export const Message = () =>
    Structures.extend(
        "Message",
        (message) =>
            class extends message {
                public command: string
                public args: string[]
                private A: string[] = this.content.split(/ +/g)
                constructor() {
                    super(arguments[0], arguments[1], arguments[2]);
                    this.command = this.A[0]
                    this.args = this.A.slice(1)
                }
                permissions() {
                    if (this.channel.type === "dm") return console.error(`cannot use permissions method on a direct message`)
                    if (this.channel.type === "news") return console.error(`this permissions method is not suited for a news channel`)
                    if (this.guild!.me === null) return console.error(`Please fetch the client guilmember before testing permissions`)
                    return this.channel.permissionsFor(this.guild!.me)
                }
            }
    );