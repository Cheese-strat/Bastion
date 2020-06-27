import { Structures } from "discord.js";
export default () =>
    Structures.extend(
        "GuildMember",
        (GuildMember) =>
        class extends GuildMember {
            private _xp: number;
            constructor() {
                super(arguments[0], arguments[1], arguments[2]);
            }
            get xp(): number {
                return 0
            }
            set xp(experience: number) {
                this._xp += experience;
            }
        }
    );