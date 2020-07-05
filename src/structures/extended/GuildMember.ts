import { Structures } from "discord.js";
export const GuildMember = () =>
    Structures.extend(
        "GuildMember",
        (GuildMember) =>
            class extends GuildMember {
                private _xp: number;
                constructor() {
                    super(arguments[0], arguments[1], arguments[2]);
                    this._xp = 0
                }
                get xp(): number {
                    return this._xp
                }
                set xp(experience: number) {
                    this._xp += experience;
                }
            }
    );