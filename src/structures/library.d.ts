import { ClientOptions, Message, Permissions, GuildMember, User, ClientEvents, Channel } from "discord.js"
export as namespace lib
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
export interface guildTYPE {
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
    [id: string]: guildTYPE
}
export interface messageTYPE extends Message {
    command: string
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

export interface cmdPerms {
    send: boolean
    embed: boolean
    delete: boolean
    react: boolean
}
export interface ChannelTYPE extends Channel {
    ventable?:boolean
}
export interface ClientEventsTYPE {
    channelCreate: [ChannelTYPE];
    channelDelete: [ChannelTYPE];
    channelPinsUpdate: [ChannelTYPE, Date];
    ChannelUpdate: [ChannelTYPE, ChannelTYPE];
    debug: [string];
    warn: [string];
    disconnect: [any, number];
    error: [Error];
    guildBanAdd: [guildTYPE, UserTYPE];
    guildBanRemove: [guildTYPE, UserTYPE];
    guildCreate: [guildTYPE];
    guildDelete: [guildTYPE];
    guildUnavailable: [guildTYPE];
    guildIntegrationsUpdate: [guildTYPE];
    guildMemberAdd: [GuildMember | PartialGuildMember];
    guildMemberAvailable: [GuildMember | PartialGuildMember];
    guildMemberRemove: [GuildMember | PartialGuildMember];
    guildMembersChunk: [Collection<Snowflake, GuildMember | PartialGuildMember>, guildTYPE];
    guildMemberSpeaking: [GuildMember | PartialGuildMember, Readonly<Speaking>];
    guildMemberUpdate: [GuildMember | PartialGuildMember, GuildMember | PartialGuildMember];
    guildUpdate: [guildTYPE, guildTYPE];
    message: [messageTYPE];
    messageDelete: [messageTYPE];
    messageReactionRemoveAll: [messageTYPE];
    messageReactionRemoveEmoji: [MessageReaction];
    messageDeleteBulk: [Collection<Snowflake, messageTYPE>];
    messageReactionAdd: [MessageReaction, User];
    messageReactionRemove: [MessageReaction, User];
    messageUpdate: [messageTYPE, messageTYPE];
    presenceUpdate: [Presence | undefined, Presence];
    rateLimit: [RateLimitData];
    ready: [];
    invalidated: [];
    roleCreate: [Role];
    roleDelete: [Role];
    roleUpdate: [Role, Role];
    typingStart: [ChannelTYPE, User ];
    userUpdate: [User , User ];
    voiceStateUpdate: [VoiceState, VoiceState];
    webhookUpdate: [TextChannel];
    shardDisconnect: [CloseEvent, number];
    shardError: [Error, number];
    shardReady: [number];
    shardReconnecting: [number];
    shardResume: [number, number];
  }