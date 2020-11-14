export default class DoggoEmbed {
	embed: embedResult;
	constructor(colour: colourResolveable) {
		this.embed = { colour: this.resolveColor(colour) };
	}
	public setTitle(title: string): DoggoEmbed {
		this.embed.title = title;
		return this;
	}
	private resolveColor(input: colourResolveable): number {
		if (typeof input === "string") {
			if (input === "RANDOM")
				return Math.floor(Math.random() * (0xffffff + 1));
			const hex = Colors[input] as number | undefined;
			if (hex) return hex;
			if (input.startsWith("#"))
				return parseInt(input.slice(1), 16) as number;
		} else if (Array.isArray(input)) {
			return (input[0] << 16) + (input[1] << 8) + input[2];
		}
		if (input < 0 || input > 0xffffff) throw new RangeError("COLOR_RANGE");
		return 0;
	}
}
var Colors = {
	WHITE: 0xffffff,
	AQUA: 0x1abc9c,
	GREEN: 0x2ecc71,
	BLUE: 0x3498db,
	YELLOW: 0xffff00,
	PURPLE: 0x9b59b6,
	LUMINOUS_VIVID_PINK: 0xe91e63,
	GOLD: 0xf1c40f,
	ORANGE: 0xe67e22,
	RED: 0xe74c3c,
	GREY: 0x95a5a6,
	NAVY: 0x34495e,
	DARK_AQUA: 0x11806a,
	DARK_GREEN: 0x1f8b4c,
	DARK_BLUE: 0x206694,
	DARK_PURPLE: 0x71368a,
	DARK_VIVID_PINK: 0xad1457,
	DARK_GOLD: 0xc27c0e,
	DARK_ORANGE: 0xa84300,
	DARK_RED: 0x992d22,
	DARK_GREY: 0x979c9f,
	DARKER_GREY: 0x7f8c8d,
	LIGHT_GREY: 0xbcc0c0,
	DARK_NAVY: 0x2c3e50,
	BLURPLE: 0x7289da,
	GREYPLE: 0x99aab5,
	DARK_BUT_NOT_BLACK: 0x2c2f33,
	NOT_QUITE_BLACK: 0x23272a,
};
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
	| keyof typeof Colors
	| "RANDOM"
	| [number, number, number]
	| number;
