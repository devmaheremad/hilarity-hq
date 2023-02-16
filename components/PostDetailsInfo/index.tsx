import { VideoTypes } from "@/@types/video.types";
import { Grid } from "@mui/material/";
type IProps = {
	postDetails: VideoTypes;
};
const PostDetailsInfo = ({ postDetails }: IProps) => {
	return (
		<Grid item xs={12} md={4}>
			<h1>test</h1>
		</Grid>
	);
};

export default PostDetailsInfo;
