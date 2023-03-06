import { VideoTypes } from "@/@types/video.types";
import { cutCaption } from "@/utils/functions";
import { Grid, Stack, Typography } from "@mui/material/";
import ProfileLinkImg from "../ProfileLinkImg";
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
			<Typography variant="subtitle2" color="#645757" mt={2} maxWidth={"95%"}>
				{cutCaption(postDetails?.caption)}
			</Typography>
		</Grid>
	);
};

export default PostDetailsInfo;
