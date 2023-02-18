import { VideoTypes } from "@/@types/video.types";
import { VideoDetailsProps } from "@/@types/videoDetails.types";
import { BASE_URL } from "@/utils";
import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { PostDetailsInfo, PostDetailsVideo } from "@/components";
const VideoDetails = ({ postDetails }: VideoDetailsProps) => {
	if (!postDetails) return null;

	return (
		<Grid container className={"min-h-100vh"} pt={{ xs: "223px", md: "94px" }}>
			<PostDetailsVideo postDetails={postDetails} />
			<PostDetailsInfo postDetails={postDetails} />
		</Grid>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { params } = ctx;
	const response = await fetch(`${BASE_URL}/api/post/${params?.videoId}`);
	const data: VideoTypes = await response.json();

	return {
		props: {
			postDetails: data,
		},
	};
};

export default VideoDetails;
