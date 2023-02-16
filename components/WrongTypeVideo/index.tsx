import { Typography } from "@mui/material";

const WrongTypeVideo = () => {
	return (
		<Typography
			variant="body2"
			color="primary.main"
			mt={2}
			px={2}
			textAlign={"center"}
		>
			Please select a video file, make sure this video must be in one of these
			formats ( MP4, WebM, or ogg ), and less than 15 MB
		</Typography>
	);
};

export default WrongTypeVideo;
