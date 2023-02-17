import { VideoTypes } from "@/@types/video.types";
import { Box, Grid } from "@mui/material/";
import ProfileLinkImg from "../ProfileLinkImg";
import UserNameWithCaptionAndImg from "../UserNameWithCaptionAndImg";
type IProps = {
	postDetails: VideoTypes;
};
const PostDetailsInfo = ({ postDetails }: IProps) => {
	return (
		<Grid item xs={12} md={4} px={{ xs: 2, sm: 3, md: 5, lg: 6, xl: 7 }}>
			<ProfileLinkImg
				userName={postDetails.postedBy.userName}
				image={postDetails.postedBy.image}
				userId={postDetails?._id}
			/>
			<UserNameWithCaptionAndImg
				userId={postDetails?._id}
				userName={postDetails?.postedBy.userName}
				caption={postDetails?.caption}
			/>
		</Grid>
	);
};

export default PostDetailsInfo;
