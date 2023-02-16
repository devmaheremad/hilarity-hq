import { VideoTypes } from "@/@types/video.types";
import { Grid, IconButton } from "@mui/material/";
import HomeIcon from "@mui/icons-material/Home";

type IProps = {
	postDetails: VideoTypes;
};

const PostDetailsVideo = ({ postDetails }: IProps) => {
	return (
		<Grid item xs={12} md={8} position={"relative"}>
			<IconButton
				aria-label="go home"
				sx={{ position: "absolute", left: "20px", top: "20px" }}
			>
				<HomeIcon sx={{ color: "primary.main" }} />
			</IconButton>
		</Grid>
	);
};

export default PostDetailsVideo;
