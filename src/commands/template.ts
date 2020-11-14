import {
	Command,
	clientClass,
	messageTYPE,
	/** @ts-ignore */
} from "../../structures/library";

export default () =>
	new Command(
		{
			name: "",
			description: "",
			category: "",
			args: {
				required: false,
				case: false,
				usage: "",
			},
			cooldown: 0,
			aliases: ["adwoiajdoaj"],
			permissions: {
				send: true,
				embed: true,
				react: false,
				delete: false,
				bot: [],
				auth: [],
			},
		},
		function run(client: clientClass, msg: messageTYPE) {},
	);
