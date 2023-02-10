import { FeedProps } from "@/@types/feed.types";
import { VedioTypes } from "@/@types/video.types";
import { Stack } from "@mui/material";
import NoResults from "./NoResults";
import VideoCard from "./VideoCard";

const Feed = ({ videos }: FeedProps) => {
	return (
		<Stack direction={"column"} spacing={2} flexGrow={1}>
			{videos.length ? (
				videos.map((video: VedioTypes) => {
					return <VideoCard post={video} key={video._id} />;
				})
			) : (
				<NoResults />
			)}
		</Stack>
	);
};

export default Feed;
