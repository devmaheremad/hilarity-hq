import { VideoCardProps } from "@/@types/videoCard.types";
import { Box, IconButton, Stack } from "@mui/material";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Link from "../Link";
import { useAppSelector } from "@/store/hook";
import { ProfileLinkImg, UserNameWithCaptionAndImg } from "../";

const VideoCard = ({ post }: VideoCardProps) => {
	const user = useAppSelector(
		(state) => state.loginCheckerWithUserData.userProfile.authUser
	);

	const [showControls, setShowControls] = useState<boolean>(false);
	const [playing, setPlaying] = useState<boolean>(false);
	const [muted, setMuted] = useState<boolean>(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const playVideoHandler = (): void => {
		if (playing) {
			videoRef.current?.pause();
			setPlaying((prev) => !prev);
		} else {
			videoRef.current?.play();
			setPlaying((prev) => !prev);
		}
	};
	const mutedVideoHandler = (): void => {
		const video = videoRef.current;
		if (video !== null) {
			if (muted) {
				video.muted = false;
				setMuted((prev) => !prev);
			} else {
				video.muted = true;
				setMuted((prev) => !prev);
			}
		}
	};

	return (
		<Stack
			width={"100%"}
			display={"flex"}
			flexDirection={{ xs: "column", sm: "row" }}
			gap={2}
			mb={12}
			maxHeight={"700px"}
		>
			<ProfileLinkImg
				userName={post.postedBy.userName}
				image={post.postedBy.image}
				userId={post?._id}
			/>
			<Box flexGrow={1}>
				<UserNameWithCaptionAndImg
					userId={post?._id}
					userName={post?.postedBy.userName}
					caption={post?.caption}
				/>
				<Box
					position={"relative"}
					maxHeight={"550px"}
					onMouseEnter={() => setShowControls(true)}
					onMouseLeave={() => setShowControls(false)}
					bgcolor={"#cfcfcf4d"}
					borderRadius={3}
					py={5}
					mt={4}
					display={"flex"}
					justifyContent={"center"}
				>
					<Link
						href={`/details/${post._id}`}
						title="video Details page"
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						height={"100%"}
						width={"90%"}
					>
						<video
							ref={videoRef}
							loop
							src={post?.video?.asset?.url}
							width={"100%"}
							className={"max-h-420px"}
						></video>
					</Link>
					{showControls && (
						<Box
							display={"flex"}
							justifyContent={"space-between"}
							position={"absolute"}
							bottom={"2%"}
							left={"50%"}
							width={"92%"}
							sx={{ transform: "translateX(-50%)" }}
						>
							{playing ? (
								<IconButton onClick={playVideoHandler} aria-label="Pause video">
									<PauseIcon sx={{ color: "#f51997", fontSize: 50 }} />
								</IconButton>
							) : (
								<IconButton onClick={playVideoHandler} aria-label="Play video">
									<PlayArrowIcon sx={{ color: "#f51997", fontSize: 50 }} />
								</IconButton>
							)}
							{muted ? (
								<IconButton
									onClick={mutedVideoHandler}
									aria-label="VolumeUp video"
								>
									<VolumeOffIcon sx={{ color: "#f51997", fontSize: 50 }} />
								</IconButton>
							) : (
								<IconButton
									onClick={mutedVideoHandler}
									aria-label="VolumeOff video"
								>
									<VolumeUpIcon sx={{ color: "#f51997", fontSize: 50 }} />
								</IconButton>
							)}
						</Box>
					)}
				</Box>
			</Box>
		</Stack>
	);
};

export default VideoCard;
