import { VideoTypes } from "@/@types/video.types";
import { Box, Grid, IconButton } from "@mui/material/";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { useRef } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

type IProps = {
	postDetails: VideoTypes;
};
import { useState } from "react";

const PostDetailsVideo = ({ postDetails }: IProps) => {
	const [playBtn, setPlayBtn] = useState<boolean>(true);
	const [muted, setMuted] = useState<boolean>(false);
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handlePlayBtn = (): void => {
		setPlayBtn((prev) => !prev);
		if (playBtn) {
			videoRef?.current?.play();
		} else {
			videoRef?.current?.pause();
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
		<Grid
			item
			xs={12}
			md={8}
			position={"relative"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<IconButton
				onClick={() => router.push("/")}
				aria-label="go home"
				sx={{ position: "absolute", left: "0", top: "-5px", p: 0 }}
			>
				<HomeIcon sx={{ color: "primary.main" }} />
			</IconButton>
			<video
				onClick={handlePlayBtn}
				ref={videoRef}
				src={postDetails.video.asset.url}
				loop
				width={"100%"}
				className={"cursor-pointer"}
			></video>
			{playBtn && (
				<IconButton
					onClick={handlePlayBtn}
					aria-label="play the video"
					sx={{
						position: "absolute",
						left: "50%",
						top: "50%",
						transform: "translate(-50%,-50%)",
					}}
				>
					<PlayCircleIcon sx={{ fontSize: 65, color: "white" }} />
				</IconButton>
			)}
			<Box position={"absolute"} bottom={"22%"} right={"1%"}>
				{muted ? (
					<IconButton onClick={mutedVideoHandler} aria-label="VolumeUp video">
						<VolumeOffIcon sx={{ color: "white", fontSize: 50 }} />
					</IconButton>
				) : (
					<IconButton onClick={mutedVideoHandler} aria-label="VolumeOff video">
						<VolumeUpIcon sx={{ color: "white", fontSize: 50 }} />
					</IconButton>
				)}
			</Box>
		</Grid>
	);
};

export default PostDetailsVideo;
