import { VideoCardProps } from "@/@types/videoCard.types";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Link from "../Link";

const VideoCard = ({ post }: VideoCardProps) => {
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

	const cutCaption = (captionStr: string): string => {
		return captionStr.length >= 250
			? `${captionStr.substring(0, 250)}...`
			: captionStr;
	};

	return (
		<Stack
			height={{ xs: "300px", md: "500px", lg: "700px" }}
			width={"100%"}
			display={"flex"}
			flexDirection={{ xs: "column", sm: "row" }}
			gap={2}
			mb={5}
		>
			<Image
				src={post?.postedBy.image}
				alt={post?.caption}
				width={55}
				height={55}
				placeholder={"blur"}
				blurDataURL={"blur"}
				className={"rounded-circle border-around"}
			/>
			<Box flexGrow={1}>
				<Typography
					variant="subtitle1"
					color="#000"
					fontWeight={600}
					display={"flex"}
					alignItems={"center"}
					gap={"8px"}
				>
					{post?.postedBy.userName}{" "}
					<VerifiedIcon fontSize="small" sx={{ color: "#1d9bf0" }} />
				</Typography>
				<Typography variant="subtitle2" color="#958989" maxWidth={"80%"}>
					{cutCaption(post?.caption)}
				</Typography>
				<Link
					onMouseEnter={() => setShowControls(true)}
					onMouseLeave={() => setShowControls(false)}
					href={"/"}
					height={"100%"}
					display={"flex"}
					alignItems={"center"}
					bgcolor={"#cfcfcf4d"}
					mt={4}
					borderRadius={3}
					py={3}
					position={"relative"}
				>
					<video
						ref={videoRef}
						loop
						src={post?.video?.asset?.url}
						width={"100%"}
						height={"80%"}
					></video>
					{showControls && (
						<Box
							display={"flex"}
							justifyContent={"space-between"}
							position={"absolute"}
							bottom={"6%"}
							left={"50%"}
							width={"92%"}
							sx={{ transform: "translateX(-50%)" }}
						>
							{playing ? (
								<IconButton onClick={playVideoHandler} aria-label="Pause video">
									<PauseIcon color="secondary" />
								</IconButton>
							) : (
								<IconButton onClick={playVideoHandler} aria-label="Play video">
									<PlayArrowIcon color="secondary" />
								</IconButton>
							)}
							{muted ? (
								<IconButton
									onClick={mutedVideoHandler}
									aria-label="VolumeUp video"
								>
									<VolumeOffIcon color="secondary" />
								</IconButton>
							) : (
								<IconButton
									onClick={mutedVideoHandler}
									aria-label="VolumeOff video"
								>
									<VolumeUpIcon color="secondary" />
								</IconButton>
							)}
						</Box>
					)}
				</Link>
			</Box>
		</Stack>
	);
};

export default VideoCard;
