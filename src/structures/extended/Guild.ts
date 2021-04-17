import { GuildChannel, GuildMember, Structures } from "discord.js";
import { GuildMemberTYPE } from "../client/types";
export default () =>
	Structures.extend(
		"Guild",
		Guild =>
			class extends Guild {
				constructor() {
					super(arguments[0], arguments[1]);
				}

				getChannel(toFind: string): GuildChannel | undefined {
					if (!isNaN(Number(toFind))) {
						const channel = this.channels.cache.get(toFind);
						if (channel) return channel;
					}
					if (toFind.startsWith("<#") && toFind.endsWith(">")) {
						const str = toFind.slice(2, -1);
						const channel = this.channels.cache.get(str);
						if (channel) return channel;
					}
					return this.channels.cache.find(
						channel => channel.name === toFind,
					);
				}

				async getMember(
					toFind: string,
				): Promise<GuildMemberTYPE | GuildMember | undefined> {
					let member: any;
					if (!isNaN(Number(toFind))) {
						member = await this.members.fetch(toFind);
						if (member) return member;
					}
					if (toFind.startsWith("<#") && toFind.endsWith(">")) {
						const str = toFind.slice(2, -1);
						member = await this.members
							.fetch(str)
							.catch(() => null);
						if (member) return member;
					}
					const nick = this.members.cache.find(
						m => m.nickname === toFind,
					);
					const username = this.members.cache.find(
						m => m.user.username === toFind,
					);
					return nick || username;
				}
			},
	);
