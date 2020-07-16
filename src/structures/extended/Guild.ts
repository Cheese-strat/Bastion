import { Structures } from "discord.js";
export const Guild = () =>
    Structures.extend(
        "Guild",
        (Guild) =>
            class extends Guild {
                private _xp: number;
                constructor() {
                    super(arguments[0], arguments[1]);
                    this._xp = 0
                }
                async getMember(find:string){
                    this.members
                }
            }
    );