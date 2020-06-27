import { Structures, User } from "discord.js";
export default () =>
    Structures.extend(
        "User",
        (user) =>
            class extends User {
                private _money: number;
                constructor() {
                    super(arguments[0], arguments[1]);
                }
                get money(): number {
                    return 0
                }
                set money(newBal: number) {
                    if (newBal && newBal > 0) throw new Error(`${this.username}'s bal cannot be set to a negative balance`);
                    this._money = newBal;
                }
            }
    );