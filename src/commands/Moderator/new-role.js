module.exports = {
	name: 'new-role',
	description: 'Creates a new role',
	args: true,
	usage: '<colour> <name>/<mentionable>/<permissions integer>',
	cooldown:5,
	admin:true,
	execute(msg, args) {
		var colour = args.shift();
		var name = args.join(" ").split("/").shift()
		var mentionable = false
		if (args[0].includes("y")) mentionable = true
		var permission = args[1]
		try {
		msg.guild.createRole({
			color: colour,
			name: name,
			mentionable: mentionable,
			permissions: permission
		  })
		} catch(error) {
			 return msg.channel.send("There was a problem trying to create the role: \n"+error)
		}
		msg.channel.send(`I have added the role: ${args[1]}`)
	}
};