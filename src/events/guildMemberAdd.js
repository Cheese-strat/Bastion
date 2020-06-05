'use strict';
module.exports = (client,  member) => {
  return
  if (member.guild.id === `609331117920747521`) {
    if (!member.bot) {
      var vrole = member.guild.roles.find(
        role => role.name === `OP beginnings`
      );
      member.addRole(vrole);
      member.guild.channels
        .get(`642375063252893696`)
        .send(`Welcome! <@${member.id}>`);
    } else {
      var vrole = member.guild.roles.find(role => role.name === `Bots`);
      member.addRole(vrole);
      member.guild.channels
        .get(`642375063252893696`)
        .send(`Bot has been added to this server: ${member.tag}`);
    }
  }
  if (member.guild.id === `491564959835226112`) {
    if (!member.bot) {
      var vrole = member.guild.roles.find(role => role.name === `newbie`);
      member.addRole(vrole);
      member.guild.channels
        .get(`491825905174446090`)
        .send(`Welcome! <@${member.id}>`);
    } else {
      member.guild.channels
        .get(`491825905174446090`)
        .send(`Bot has been added to this server: ${member.tag}`);
    }
  }
}