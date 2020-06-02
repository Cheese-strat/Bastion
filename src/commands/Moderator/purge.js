module.exports = {
	name: 'purge',
	description: 'Clears the specified number of messages from the channel',
	args: true,
	admin:true,
	usage: '<number of messages>',
	cooldown:5,
	aliases: ['clear', 'wipe', 'clean', 'delete'],
	execute(msg, args) {
    	var deleteCount = Number(args[0]);
    	if(!deleteCount || deleteCount < 2 || deleteCount > 100) return msg.channel.send("Please provide a number between 2 and 100 for the number of messages to delete");
    	msg.channel.bulkDelete(deleteCount).catch(error => msg.channel.send(`Couldn't delete messages because of: ${error}`));
	}
};