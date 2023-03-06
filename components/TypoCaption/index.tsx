import { cutCaption } from "@/utils/functions";
import { Typography } from "@mui/material/";

type IProps = {
	caption: string;
};

const TypoCaption = ({ caption }: IProps) => {
	return (
		<Typography variant="subtitle2" color="#645757" maxWidth={"95%"}>
			{cutCaption(caption)}
		</Typography>
	);
};

export default TypoCaption;
