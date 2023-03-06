export const cutCaption = (captionStr: string): string => {
	return captionStr.length >= 50
		? `${captionStr.substring(0, 50)}...`
		: captionStr;
};
