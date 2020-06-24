'use strict';
export = (client:any) => 
    require("fs").readdirSync(`./src/events`).filter(f =>
        f.endsWith(".js")).forEach(fileName =>
            client.on(
                fileName.split(".")[0],
                (require(`${client.path}/events/${fileName}`))
                    .bind(null, client)
            )
        )