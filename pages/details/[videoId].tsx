import { VideoTypes } from "@/@types/video.types";
import { VideoDetailsProps } from "@/@types/videoDetails.types";
import { BASE_URL } from "@/utils";
import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { PostDetailsInfo, PostDetailsVideo } from "@/components";
const VideoDetails = ({ postDetails }: VideoDetailsProps) => {
	return (
		<Grid
			container
			px={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
			mx={"0 auto"}
			maxWidth={"1300px"}
			className={"paddingContent min-h-100vh"}
		>
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
