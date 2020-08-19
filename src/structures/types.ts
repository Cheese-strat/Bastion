import * as Discord from "discord.js"
export module Bastion {
    export type ClientOptionsTYPE = {
        clientOptions: Discord.ClientOptions,
        prefix: string,
        token: string,
        name: string,
        version: string,
        description: string,
        author: string,
        flagprefix: string,
        developers: string[]
    }
    export interface reminderTYPE {
        time: number,
        author: string,
        target: string,
        message: string
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
        reminders: reminderTYPE[],
        banwords: string[]
    }
    export interface storageTYPE {
        [id: string]: storageGuildTYPE
    }
    export interface GuildTYPE extends Discord.Guild {
        getChannel(toFind: string): Discord.GuildChannel
        getMember(toFind: string): Promise<GuildMemberTYPE | Discord.GuildMember | undefined>
    }
    export interface messageTYPE extends Discord.Message {
        guild: GuildTYPE
        command: string | undefined
        args: string[]
        A: string[]
        permissions(): Discord.Permissions

    }
    export interface GuildMemberTYPE extends Discord.GuildMember {
        xp: number
    }
    export interface UserTYPE extends Discord.User {
        money: number
    }
    export interface CMDPermsObj {
        send: boolean
        embed: boolean
        react: boolean
        delete: boolean
        bot: extraPermissions[]
        auth: extraPermissions[]
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

    export interface ChannelTYPE extends Discord.Channel {
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
        guildMembersChunk: [Discord.Collection<Discord.Snowflake, GuildMemberTYPE>, storageGuildTYPE];
        guildMemberSpeaking: [GuildMemberTYPE, Readonly<Discord.Speaking>];
        guildMemberUpdate: [GuildMemberTYPE, GuildMemberTYPE];
        guildUpdate: [storageGuildTYPE, storageGuildTYPE];
        message: messageTYPE;
        messageDelete: messageTYPE;
        messageReactionRemoveAll: messageTYPE;
        messageReactionRemoveEmoji: Discord.MessageReaction;
        messageDeleteBulk: [Discord.Collection<Discord.Snowflake, messageTYPE>];
        messageReactionAdd: [Discord.MessageReaction, Discord.User];
        messageReactionRemove: [Discord.MessageReaction, Discord.User];
        messageUpdate: [messageTYPE, messageTYPE];
        presenceUpdate: [Discord.Presence | undefined, Discord.Presence];
        rateLimit: Discord.RateLimitData;
        ready: [];
        invalidated: [];
        roleCreate: Discord.Role;
        roleDelete: Discord.Role;
        roleUpdate: [Discord.Role, Discord.Role];
        typingStart: [ChannelTYPE, Discord.User];
        userUpdate: [Discord.User, Discord.User];
        voiceStateUpdate: [Discord.VoiceState, Discord.VoiceState];
        webhookUpdate: Discord.TextChannel;
    /* disabling sharding
    shardDisconnect: [CloseEvent, number];
    shardError: [Error, number];
    shardReady: number;
    shardReconnecting: number;
    shardResume: [number, number];
    */
   }
}