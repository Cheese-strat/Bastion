'use strict';
module.exports = function (client, deletedmsg) {
    return;
    //deletedmsg.channel.send(`The message : "${deletedmsg.content}" by ${deletedmsg.author.tag} was deleted.`)
    db[deletedmsg.guild.id].snipemsg = deletedmsg.content;
};