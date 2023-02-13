import { FeedProps } from "@/@types/feed.types";
import { VideoTypes } from "@/@types/video.types";
import { Stack, Typography } from "@mui/material";
import NoResults from "../NoResults";
import VideoCard from "../VideoCard";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
const Feed = ({ videos }: FeedProps) => {
	return (
		<Stack direction={"column"} flexGrow={1}>
			{videos.length ? (
				<>
					<Typography variant="h4" component={"h1"} color="#f51997" mb={4}>
						<SlowMotionVideoIcon />
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
