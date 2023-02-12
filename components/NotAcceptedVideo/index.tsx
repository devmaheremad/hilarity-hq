import { Typography } from "@mui/material";

const NotAcceptedVideo = () => {
	return (
		<Typography
			variant="body2"
			color="#f51997"
			maxWidth={"280px"}
			textAlign={"center"}
		>
			Please select a video file, and this video must be less than 15 MB
		</Typography>
	);
};

export default NotAcceptedVideo;
