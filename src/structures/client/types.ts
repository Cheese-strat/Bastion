import { ClientOptions, Message, Permissions, GuildMember, User } from "discord.js"
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