'use strict';
module.exports = function (client) {
    console.log("bot is running. logged in as " + client.user.tag);
    client.user.setPresence({ activity: { name: 'on the floor' }, status: 'idle' });
    client.channels.fetch("678586548978974739").then(function (chan) { return chan.send(client.user.tag + " is running"); });
};
