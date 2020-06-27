import {ClientOptions} from "discord.js"

/** Export base classes */
export * from "./base/Command"
export * from "./base/Event"
/** Export client classes */
export * from "./client/client"
/** Export extenstions */
export * from "./extended/GuildMember"
export * from "./extended/Message"
export * from "./extended/User"
/** Export util methods */
export * from "./util/correct"
export * from "./util/levenstein"
export * from "./util/storage"



export type config = {
    client_Options: ClientOptions,
    prefix: string,
    token: string,
    name: string,
    version: string,
    description: string,
    author: string,
    flagprefix: string,
    developers: string[]
}
export interface guildObject {
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
export interface storage {
    [id: string]: guildObject
}