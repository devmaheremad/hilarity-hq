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
}: HeadingWithSubProps) => {
	return (
		<>
			<Typography
				variant={`${headingVariant}`}
				color={`${headingColor}`}
				fontWeight={headingFontWeight}
			>
				{headingText}
			</Typography>
			<Typography
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
