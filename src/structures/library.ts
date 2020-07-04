import clientClass from "./client/client"
import levenstein from "./util/levenstein"
import correct from "./util/correct"
import { Command } from "./base/Command"

/** Export base classes */
export * as Command from "./base/Command"
export * as Event from "./base/Event"

/** Export the client, objects and obj types */
export * from "./client/Object"
export * from "./client/types"
export class  clientClass

/** Export extenstions */
export * from "./extended/GuildMember"
export * from "./extended/Message"
export * from "./extended/User"

/** Export util methods */
export * as correct from "./util/correct"
export * as levenstein from "./util/levenstein"
export * as store from "./util/storage"