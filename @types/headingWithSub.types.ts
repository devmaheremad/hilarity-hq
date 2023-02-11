export type HeadingWithSubProps = {
	headingVariant:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "subtitle1"
		| "subtitle2"
		| "body1"
		| "body2"
		| "caption"
		| "button"
		| "overline"
		| "inherit";
	headingText: string;
	headingColor?: string;
	headingFontWeight?: number;
	subVariant:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "subtitle1"
		| "subtitle2"
		| "body1"
		| "body2"
		| "caption"
		| "button"
		| "overline"
		| "inherit";
	subText: string;
	subColor?: string;
	subFontWeight?: number;
};
