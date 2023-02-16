import { Typography } from "@mui/material";

const NotAcceptedVideo = () => {
	return (
		<Typography
			variant="body2"
			color="primary.main"
			maxWidth={"280px"}
			textAlign={"center"}
		>
			Please select a video file, and this video must be less than 15 MB
		</Typography>
	);
};

export default NotAcceptedVideo;
