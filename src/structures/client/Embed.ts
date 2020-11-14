export default class DoggoEmbed {
	embed: embedResult;
	constructor(colour: colourResolveable) {
		this.embed = { colour: this.resolveColor(colour) };
	}
	private resolveColor(color: colourResolveable) {
		if (typeof color === "string") {
			if (color === "RANDOM")
				return Math.floor(Math.random() * (0xffffff + 1));
			if (color === "DEFAULT") return 0;
			color = Colors[color] || parseInt(color.replace("#", ""), 16);
		} else if (Array.isArray(color)) {
			color = (color[0] << 16) + (color[1] << 8) + color[2];
		}

		if (color < 0 || color > 0xffffff) throw new RangeError("COLOR_RANGE");
		else if (color && isNaN(color)) throw new TypeError("COLOR_CONVERT");

		return color;
	}
}
interface embedResult {
	colour: colourResolveable;
	title?: string;
	url?: string;
	author?: {
		name?: string;
		icon_url?: string;
		url?: string;
	};
	description?: string;
	thumbnail?: {
		url?: string;
	};
	fields?: Array<{
		name: string;
		value: string;
		inline?: boolean;
	}>;

	image?: {
		url: string;
	};
	timestamp?: Date;
	footer?: {
		text?: string;
		icon_url?: string;
	};
}
type colourResolveable =
	| "DEFAULT"
	| "WHITE"
	| "AQUA"
	| "GREEN"
	| "BLUE"
	| "YELLOW"
	| "PURPLE"
	| "LUMINOUS_VIVID_PINK"
	| "GOLD"
	| "ORANGE"
	| "RED"
	| "GREY"
	| "DARKER_|GREY"
	| "NAVY"
	| "DARK_AQUA"
	| "DARK_GREEN"
	| "DARK_BLUE"
	| "DARK_PURPLE"
	| "DARK_VIVID_PINK"
	| "DARK_GOLD"
	| "DARK_ORANGE"
	| "DARK_RED"
	| "DARK_GREY"
	| "LIGHT_GREY"
	| "DARK_NAVY"
	| "BLURPLE"
	| "GREYPLE"
	| "DARK_BUT_NOT_BLACK"
	| "NOT_QUITE_BLACK"
	| "RANDOM"
	| [number, number, number]
	| number;
