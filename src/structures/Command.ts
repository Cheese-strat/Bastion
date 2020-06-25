import { Client } from "discord.js";

import clientClass from "./client"
export default class {
    path:string
    client:clientClass
    constructor(path:string, client:clientClass){
        this.path = path
        this.client = client
    }
}