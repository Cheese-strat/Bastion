import { Structures } from "discord.js";
export default () =>
    Structures.extend(
        "User",
        (user) =>
            class extends user {
                private _money: number;
                constructor() {
                    super(arguments[0], arguments[1]);
                    this._money = 0
                }
                get money(): number {
                    return this._money
                }
                set money(newBal: number) {
                    if (newBal && newBal > 0) throw new Error(`${this.username}'s bal cannot be set to a negative balance`);
                    this._money = newBal;
                }
            }
    );