import { ClientOptionsTYPE, guildTYPE } from "../library"
export const config: ClientOptionsTYPE = {
    clientOptions: {},
    prefix: "b!",
    token: "",
    name: "Bastion",
    version: "4.3.4",
    description: "My Discord Bot",
    author: "Cheesestrat",
    flagprefix: "-",
    developers: [
        "625149330348703744"
    ]
}
export const guildObject: guildTYPE = {
    logs: {
        "id": null,
        "badwords": false,
        "allmsg": false,
        "newusers": false,
        "channelu": false,
        "useru": false
    },
    prefix: "b!",
    reminders: [],
    banwords: []
}