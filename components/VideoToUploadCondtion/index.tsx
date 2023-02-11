import { Typography, Button } from "@mui/material";

const VideoToUploadCondtion = () => {
	return (
		<>
			<Typography variant="body1" fontWeight={500} color="black">
				Upload a video
			</Typography>
			<Typography variant="caption" fontWeight={500} color="#808080a6">
				MP4 or WebM or ogg
			</Typography>
			<Typography variant="caption" fontWeight={500} color="#808080a6">
				720*1280 or higher
			</Typography>
			<Typography variant="caption" fontWeight={500} color="#808080a6">
				Up to 20 minutes
			</Typography>
			<Typography variant="caption" fontWeight={500} color="#808080a6">
				Less than 2 GB
			</Typography>
			<Button variant="contained" sx={{ mt: 3, textTransform: "none" }}>
				Select a video
			</Button>
		</>
	);
};

export default VideoToUploadCondtion;
