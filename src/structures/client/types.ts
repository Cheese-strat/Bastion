import {
	ClientOptions,
	Message,
	Permissions,
	GuildMember,
	User,
	Channel,
	Collection,
	Snowflake,
	Speaking,
	MessageReaction,
	Presence,
	RateLimitData,
	Role,
	VoiceState,
	TextChannel,
	Guild,
	GuildChannel,
	DMChannel,
	NewsChannel,
	ClientEvents,
	CloseEvent,
	Invite,
	GuildEmoji,
} from "discord.js";
export type ClientOptionsTYPE = {
	clientOptions: ClientOptions;
	prefix: string;
	token: string;
	name: string;
	version: string;
	description: string;
	author: string;
	flagprefix: string;
	developers: string[];
};
export interface reminderTYPE {
	time: number;
	author: string;
	target: string;
	message: string;
}
export interface storageGuildTYPE {
	logs: {
		id: null | string;
		badwords: boolean;
		allmsg: boolean;
		newusers: boolean;
		channelu: boolean;
		useru: boolean;
	};
	prefix: string;
	reminders: reminderTYPE[];
	banwords: string[];
}
export interface storageTYPE {
	[id: string]: storageGuildTYPE;
}
export interface GuildTYPE extends Guild {
	getChannel(toFind: string): GuildChannel;
	getMember(
		toFind: string,
	): Promise<GuildMemberTYPE | GuildMember | undefined>;
}
export interface MessageTYPE extends Message {
	guild: GuildTYPE;
	command: string | undefined;
	args: string[];
	permissions(): Permissions;
}
export interface GuildMemberTYPE extends GuildMember {
	xp: number;
}
export interface UserTYPE extends User {
	money: number;
}
export interface CMDPermsObj {
	send: boolean;
	embed: boolean;
	react: boolean;
	delete: boolean;
	bot: extraPermissions[];
	auth: extraPermissions[];
}
export type extraPermissions =
	| "CREATE_INSTANT_INVITE"
	| "KICK_MEMBERS"
	| "BAN_MEMBERS"
	| "ADMINISTRATOR"
	| "MANAGE_CHANNELS"
	| "MANAGE_GUILD"
	| "VIEW_AUDIT_LOG"
	| "PRIORITY_SPEAKER"
	| "STREAM"
	| "SEND_TTS_MESSAGES"
	| "MENTION_EVERYONE"
	| "VIEW_GUILD_INSIGHTS"
	| "CONNECT"
	| "SPEAK"
	| "MUTE_MEMBERS"
	| "DEAFEN_MEMBERS"
	| "MOVE_MEMBERS"
	| "USE_VAD"
	| "CHANGE_NICKNAME"
	| "MANAGE_NICKNAMES"
	| "MANAGE_ROLES"
	| "MANAGE_WEBHOOKS"
	| "MANAGE_EMOJIS";

export interface ChannelTYPE extends Channel {
	ventable?: boolean;
}

export interface ClientEventsTYPE extends ClientEvents {
	channelCreate: [ChannelTYPE];
	channelDelete: [ChannelTYPE];
	channelPinsUpdate: [ChannelTYPE, Date];
	channelUpdate: [ChannelTYPE, ChannelTYPE];
	/* debug: [string];
    warn: [string];
    disconnect: [any, number];
    emojiCreate: [GuildEmoji];
    emojiDelete: [GuildEmoji]; */
	emojiUpdate: [GuildEmoji, GuildEmoji];
	error: [Error];
	guildBanAdd: [GuildTYPE, UserTYPE];
	//guildBanRemove: [GuildTYPE, UserTYPE];
	//guildCreate: [GuildTYPE];
	guildDelete: [GuildTYPE];
	guildUnavailable: [GuildTYPE];
	guildIntegrationsUpdate: [GuildTYPE];
	//guildMemberAdd: [GuildMemberTYPE];
	guildMemberAvailable: [GuildMemberTYPE];
	guildMemberRemove: [GuildMemberTYPE];
	/* guildMembersChunk: [
      Collection<Snowflake, GuildMemberTYPE>,
      Guild,
      { count: number; index: number; nonce: string | undefined },
    ]; */
	//guildMemberSpeaking: [GuildMemberTYPE, Readonly<Speaking>];
	//guildMemberUpdate: [GuildMemberTYPE, GuildMemberTYPE];
	guildUpdate: [GuildTYPE, GuildTYPE];
	/*inviteCreate: [Invite];
    inviteDelete: [Invite]; */
	message: [MessageTYPE];
	messageDelete: [MessageTYPE];
	//messageReactionRemoveAll: [MessageTYPE];
	/* messageReactionRemoveEmoji: [MessageReaction]; */
	//messageDeleteBulk: [Collection<Snowflake, Message>];
	//messageReactionAdd: [MessageReaction, UserTYPE];
	messageReactionRemove: [MessageReaction, UserTYPE];
	//messageUpdate: [MessageTYPE, MessageTYPE];
	/* presenceUpdate: [Presence | undefined, Presence];
    rateLimit: [RateLimitData];
    ready: [];
    invalidated: [];
    roleCreate: [Role];
    roleDelete: [Role];
    roleUpdate: [Role, Role]; */
	//typingStart: [ChannelTYPE, UserTYPE];
	//userUpdate: [UserTYPE, UserTYPE];
	/* voiceStateUpdate: [VoiceState, VoiceState];
    webhookUpdate: [TextChannel];
    shardDisconnect: [CloseEvent, number];
    shardError: [Error, number];
    shardReady: [number, Set<Snowflake> | undefined];
    shardReconnecting: [number];
    shardResume: [number, number]; */
}
export interface configTYPE {
	client_Options: ClientOptionsTYPE;
	prefix: string;
	token: string;
	name: string;
	version: string | number;
	description: string;
	author: string;
	flagprefix: string;
	developers: string[];
	correctThreshold: number;
	privateLogChannel: string;
}
