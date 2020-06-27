import {ClientOptions, Collection} from "discord.js"
declare module "Beagle" {
    type config = {
        client_Options: ClientOptions,
        prefix: string,
        token: string,
        name: string,
        version: number,
        description: string,
        author: string,
        flagprefix: string,
        developers: string[]
      }
      export interface guildObject {
        logs: {
            id: null|string,
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
          [id:string]:guildObject
      }
}