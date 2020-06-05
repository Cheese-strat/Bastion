'use strict';
module.exports = (client,  oldMessage, newMessage) => {
  return
  const logs = client.channels.get(data[oldMessage.guild.id].logs.id)
  if (oldMessage.content != newMessage.content) {
    console.log(oldMessage, newMessage);
    if (data[oldMessage.guild.id].logs.allmsg === "on") {
      logs.send({
        embed: {
          color: Math.floor(Math.random() * 16777214) + 1,
          title: 'Some title',
          url: 'https://discord.js.org',
          author: {
            name: 'Some name',
            icon_url: 'https://i.imgur.com/wSTFkRM.png',
            url: 'https://discord.js.org',
          },
          description: 'Some description here',
          thumbnail: {
            url: 'https://i.imgur.com/wSTFkRM.png',
          },
          fields: [{
              name: 'Regular field title',
              value: 'Some value here',
            },
            {
              name: 'Regular field title',
              value: 'Some value here',
            },
          ],
          image: {
            url: 'https://i.imgur.com/wSTFkRM.png',
          },
          timestamp: new Date(),
          footer: {
            text: 'Some footer text here',
            icon_url: 'https://i.imgur.com/wSTFkRM.png',
          },
        }
      })
    } else {
      oldMessage.channel.send("Message deletion and edits not be logged")
    }
  }
}