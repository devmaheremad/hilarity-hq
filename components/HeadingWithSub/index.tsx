import { HeadingWithSubProps } from "@/@types/headingWithSub.types";
import { Typography } from "@mui/material";

const HeadingWithSub = ({
	headingText,
	headingVariant,
	headingColor,
	headingFontWeight,
	subText,
	subVariant,
	subColor,
	subFontWeight,
	textAlign,
}: HeadingWithSubProps) => {
	return (
		<>
			<Typography
				textAlign={textAlign ? textAlign : "start"}
				variant={`${headingVariant}`}
				color={`${headingColor}`}
				fontWeight={headingFontWeight}
			>
				{headingText}
			</Typography>
			<Typography
				textAlign={textAlign ? textAlign : "start"}
				mt={"2px"}
				variant={`${subVariant}`}
				color={`${subColor}`}
				fontWeight={subFontWeight}
			>
				{subText}
			</Typography>
		</>
	);
};

export default HeadingWithSub;
