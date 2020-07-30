import { ClientOptions, Message, Permissions, GuildMember, User, Channel, Collection, Snowflake, Speaking, MessageReaction, Presence, RateLimitData, Role, VoiceState, TextChannel } from "discord.js"
export type ClientOptionsTYPE = {
    clientOptions: ClientOptions,
    prefix: string,
    token: string,
    name: string,
    version: string,
    description: string,
    author: string,
    flagprefix: string,
    developers: string[]
}
export interface storageGuildTYPE {
    logs: {
        id: null | string,
        badwords: boolean,
        allmsg: boolean,
        newusers: boolean,
        channelu: boolean,
        useru: boolean
    },
    prefix: string,
    reminders: [],
    banwords: []
}
export interface storageTYPE {
    [id: string]: storageGuildTYPE
}

export interface messageTYPE extends Message {
    command: string | undefined
    args: string[]
    A: string[]
    permissions(): Permissions

}
export interface GuildMemberTYPE extends GuildMember {
    xp: number
}
export interface UserTYPE extends User {
    money: number
}
export interface CMDPermsObj {
    send:boolean
    embed:boolean
    react:boolean
    delete:boolean
    bot:extraPermissions[]
    auth:extraPermissions[]   
}
export type extraPermissions =
    | 'CREATE_INSTANT_INVITE'
    | 'KICK_MEMBERS'
    | 'BAN_MEMBERS'
    | 'ADMINISTRATOR'
    | 'MANAGE_CHANNELS'
    | 'MANAGE_GUILD'
    | 'VIEW_AUDIT_LOG'
    | 'PRIORITY_SPEAKER'
    | 'STREAM'
    | 'SEND_TTS_MESSAGES'
    | 'MENTION_EVERYONE'
    | 'VIEW_GUILD_INSIGHTS'
    | 'CONNECT'
    | 'SPEAK'
    | 'MUTE_MEMBERS'
    | 'DEAFEN_MEMBERS'
    | 'MOVE_MEMBERS'
    | 'USE_VAD'
    | 'CHANGE_NICKNAME'
    | 'MANAGE_NICKNAMES'
    | 'MANAGE_ROLES'
    | 'MANAGE_WEBHOOKS'
    | 'MANAGE_EMOJIS';

export interface ChannelTYPE extends Channel {
    ventable?: boolean
}
export interface ClientEventsTYPE {
    channelCreate: ChannelTYPE;
    channelDelete: ChannelTYPE;
    channelPinsUpdate: [ChannelTYPE, Date];
    ChannelUpdate: [ChannelTYPE, ChannelTYPE];
    debug: string;
    warn: string;
    disconnect: [any, number];
    error: Error;
    guildBanAdd: [storageGuildTYPE, UserTYPE];
    guildBanRemove: [storageGuildTYPE, UserTYPE];
    guildCreate: storageGuildTYPE;
    guildDelete: storageGuildTYPE;
    guildUnavailable: storageGuildTYPE;
    guildIntegrationsUpdate: storageGuildTYPE;
    guildMemberAdd: GuildMemberTYPE;
    guildMemberAvailable: GuildMemberTYPE;
    guildMemberRemove: GuildMemberTYPE;
    guildMembersChunk: [Collection<Snowflake, GuildMemberTYPE>, storageGuildTYPE];
    guildMemberSpeaking: [GuildMemberTYPE, Readonly<Speaking>];
    guildMemberUpdate: [GuildMemberTYPE, GuildMemberTYPE];
    guildUpdate: [storageGuildTYPE, storageGuildTYPE];
    message: messageTYPE;
    messageDelete: messageTYPE;
    messageReactionRemoveAll: messageTYPE;
    messageReactionRemoveEmoji: MessageReaction;
    messageDeleteBulk: [Collection<Snowflake, messageTYPE>];
    messageReactionAdd: [MessageReaction, User];
    messageReactionRemove: [MessageReaction, User];
    messageUpdate: [messageTYPE, messageTYPE];
    presenceUpdate: [Presence | undefined, Presence];
    rateLimit: RateLimitData;
    ready: [];
    invalidated: [];
    roleCreate: Role;
    roleDelete: Role;
    roleUpdate: [Role, Role];
    typingStart: [ChannelTYPE, User];
    userUpdate: [User, User];
    voiceStateUpdate: [VoiceState, VoiceState];
    webhookUpdate: TextChannel;
    /* disabling sharding
    shardDisconnect: [CloseEvent, number];
    shardError: [Error, number];
    shardReady: number;
    shardReconnecting: number;
    shardResume: [number, number];
    */
}
