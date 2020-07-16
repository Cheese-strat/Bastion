import { clientClass, Command, messageTYPE } from "../../structures/library"

export default class extends Command {
	name = "avatar"
	description = "Shows the pfp of the mentioned user, or the message author if no user is mentioned"
	args = {
		required: false,
		case: false,
		usage: ""
	}
	cooldown = 2
	aliases = ['pfp', 'profile']
	permissions = {
		send:true,
		embed:true,
		react:false,
		delete:false,
		bot:[],
		auth:[]
	}
	constructor(path:string, client:clientClass){
		super(path, client)
	}

	async run(client:clientClass,msg:messageTYPE) {
		let member = await ez.getmember(msg.args.join(" "), msg.guild.members);
		if (!member && !msg.args.length) member = msg.member
		if (!member) return msg.channel.send("I couldn't find that target")
		const embed = ez.embed(member.displayHexColor, `${member.user.username}'s avatar:`)
		embed.setImage(member.user.displayAvatarURL({
			format: "png"
		}))
		return msg.channel.send(embed)
	}
};