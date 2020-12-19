import { inspect } from "util";
import { transpile } from "typescript";
import { clientClass, Command, MessageTYPE } from "../../structures/library";
import { Message } from "discord.js";

export default (client: clientClass) =>
	new Command(
		client,
		{
			cmdName: "eval",
			description: "used to evaluate code, for instant code testing",
			args: {
				required: true,
				case: true,
				usage: "<code to evaluate>",
			},
			cooldown: 5,
			aliases: ["evaluate", "ev"],
			permissions: {
				send: false,
				embed: false,
				react: false,
				delete: false,
				bot: [],
				auth: [],
			},
		},
		async function run(
			_client: clientClass,
			msg: MessageTYPE,
		): Promise<Message> {
			async function clean(Input: any) {
				if (Input instanceof Promise) Input = await Input;
				if (typeof Input !== "string")
					Input = inspect(Input, { depth: 0 });

				Input = Input.replace(
					/`/g,
					"`" + String.fromCharCode(8203),
				).replace(/@/g, "@" + String.fromCharCode(8203));

				return Input;
			}

			const Input = msg.args
				.join(" ")
				.replace(/.*```\w*\s*(.*)\s*```.*/s, "$1")
				.replace(/[“”‘’]/g, '"')
				.trim();

			const language = msg.args
				.join(" ")
				.replace(/.*```(ts|js)?\n.*\s*```.*/s, "$1")
				.trim();
			let toEval: string;
			switch (true) {
				case Input.includes("await"):
					toEval = `(async() => {${Input}})()`;
					break;
				case Input.includes("return"):
					toEval = `(() => {${Input}})()`;
					break;
				default:
					toEval = Input;
					break;
			}
			if (language === "ts") toEval = transpile(Input);
			let evaledOutput;
			const StartTime = process.hrtime();
			try {
				evaledOutput = await eval(toEval);
				evaledOutput = await clean(evaledOutput);
			} catch (e) {
				return msg.channel.send(`error:${e.message}`);
			}
			const EvalTime = process.hrtime(StartTime);
			const FormattedTime = `${(
				EvalTime[0] * 1e9 +
				EvalTime[1] / 1e6
			).toFixed(2)}ms`;

			return msg.channel.send(
				`**Output:**\n\`\`\`js\n${
					evaledOutput.length < 1950
						? evaledOutput
						: evaledOutput.slice(1950)
				}\`\`\`Time: **- ${FormattedTime}**`,
			);
		},
	);
