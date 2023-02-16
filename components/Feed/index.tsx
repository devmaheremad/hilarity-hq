import { FeedProps } from "@/@types/feed.types";
import { VideoTypes } from "@/@types/video.types";
import { Stack, Typography } from "@mui/material";
import NoResults from "../NoResults";
import VideoCard from "../VideoCard";
const Feed = ({ videos }: FeedProps) => {
	return (
		<Stack direction={"column"} flexGrow={1}>
			{videos.length ? (
				<>
					<Typography
						variant="subtitle1"
						component={"h1"}
						color="primary.main"
						mb={4}
					>
						We believe that everyone has something valuable to contribute, and
						your contribution will be greatly appreciated. So go ahead, create
						your account, and upload a video today!
					</Typography>
					{videos.map((video: VideoTypes) => {
						return <VideoCard post={video} key={video._id} />;
					})}
				</>
			) : (
				<NoResults />
			)}
		</Stack>
	);
};

export default Feed;
