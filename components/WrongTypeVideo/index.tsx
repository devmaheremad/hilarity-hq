import { Typography } from "@mui/material";

const WrongTypeVideo = () => {
	return (
		<Typography
			variant="body2"
			color="#f51997"
			mt={2}
			px={2}
			textAlign={"center"}
		>
			Please select a video file, and this video must be in one of these formats
			( MP4, WebM, or ogg )
		</Typography>
	);
};

export default WrongTypeVideo;
