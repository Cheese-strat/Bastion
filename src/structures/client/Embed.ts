import { EmbedField, MessageEmbedOptions } from "discord.js";

export default class DoggoEmbed {
	embed: MessageEmbedOptions;
	/**
	 * @param colour The Colour of the embed
	 * @constructor
	 */
	constructor(colour: colourResolveable) {
		this.embed = { color: this.resolveColor(colour) };
	}
	/**
	 * @method setTitle Set the title of the embed
	 * @param title the text to set
	 */
	public setTitle(title: string): DoggoEmbed {
		this.embed.title = title;
		return this;
	}
	/**
	 * @private
	 */
	private resolveColor(input: colourResolveable): number {
		if (typeof input === "string") {
			if (input === "RANDOM")
				return Math.floor(Math.random() * (0xffffff + 1));
			///@ts-expect-error
			const hex = Colors[input] as number | undefined;
			if (hex) return hex;
			if (input.startsWith("#"))
				return parseInt(input.slice(1), 16) as number;
		} else if (Array.isArray(input)) {
			return (input[0] << 16) + (input[1] << 8) + input[2];
		}
		input = input as number;
		if (input < 0 || input > 0xffffff) throw new RangeError("COLOR_RANGE");
		return 0;
	}
	/**
	 *@method resolveUrl Resolves the string to a url
	 * @param url the string to resolve
	 * @private
	 * @returns the input string
	 */
	private resolveUrl(url: string): string {
		if (typeof url !== "string")
			throw new TypeError(
				`Invalid Type, expected typeof String, recieved ${typeof url}`,
			);
		if (
			!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
				url,
			)
		)
			throw new Error("not a valid url");
		return url;
	}
	/**
	 * @description Sets the URL the user goes to when clicking on the title
	 * @param url String
	 */
	public setUrl(url: string): DoggoEmbed {
		if (!this.embed.title)
			throw new Error("Incorrect Use, you need to set the title first");
		this.embed.url = this.resolveUrl(url);
		return this;
	}
	public setAuthor(
		name: string,
		pictureURL?: string,
		url?: string,
	): DoggoEmbed {
		if (typeof this.embed.author === "undefined") this.embed.author = {};
		this.embed.author.name = name;
		if (pictureURL) this.embed.author.icon_url = pictureURL;
		if (url) this.embed.author.url = url;
		return this;
	}
	public setDescription(desc: string) {
		if (desc.length > 2048)
			throw new Error(
				`Passed string was too long in length (${desc.length} > 2048)`,
			);
		this.embed.description = desc;
		return this;
	}
	public setThumbnail(url: string) {
		this.embed.thumbnail = { url: this.resolveUrl(url) };
	}
	public setFields(fields: EmbedField[]) {
		this.embed.fields = fields.map(field => {
			if (field.name.length > 1024) {
				throw new Error(
					`Passed string was too long in length (${field.name.length} > 1024)`,
				);
			}
			if (field.name.length > 1024) {
				throw new Error(
					`Passed string was too long in length (${field.name.length} > 1024)`,
				);
			}
			return field;
		});
	}
	public setImage(url: string): DoggoEmbed {
		this.embed.image = { url: this.resolveUrl(url) };
		return this;
	}
	public setTimestamp(time: Date | number): DoggoEmbed {
		this.embed.timestamp = new Date(time);
		return this;
	}
	public setFooter(text: string, icon?: string): DoggoEmbed {
		if (text.length > 1024) {
			throw new Error(
				`Passed string was too long in length (${text.length} > 1024)`,
			);
		}
		this.embed.footer = { text: text };
		if (icon) this.embed.footer.icon_url = this.resolveUrl(icon);
		return this;
	}
}
const Colors = {
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
type colourResolveable =
	| keyof typeof Colors
	| "RANDOM"
	| [number, number, number]
	| number
	| string;
