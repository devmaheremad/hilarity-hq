import { VideoTypes } from "@/@types/video.types";
import { Box, Grid, Stack } from "@mui/material/";
import ProfileLinkImg from "../ProfileLinkImg";
import TypoCaption from "../TypoCaption";
import UserNameWithImg from "../UserNameWithImg";
type IProps = {
	postDetails: VideoTypes;
};
const PostDetailsInfo = ({ postDetails }: IProps) => {
	return (
		<Grid
			item
			xs={12}
			md={4}
			px={{ xs: 2, sm: 3, md: 5, lg: 6, xl: 7 }}
			pt={"50px"}
		>
			<Stack direction={"row"} spacing={2}>
				<ProfileLinkImg
					userName={postDetails.postedBy.userName}
					image={postDetails.postedBy.image}
					userId={postDetails?._id}
				/>
				<UserNameWithImg
					userId={postDetails?._id}
					userName={postDetails?.postedBy.userName}
				/>
			</Stack>
			<Box mt={2}>
				<TypoCaption caption={postDetails?.caption} />
			</Box>
		</Grid>
	);
};

export default PostDetailsInfo;
