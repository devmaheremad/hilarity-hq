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
import { useAppSelector } from "@/store/hook";

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

	const cutCaption = (captionStr: string): string => {
		return captionStr.length >= 250
			? `${captionStr.substring(0, 250)}...`
			: captionStr;
	};

	return (
		<Stack
			width={"100%"}
			display={"flex"}
			flexDirection={{ xs: "column", sm: "row" }}
			gap={2}
			mb={12}
		>
			<Link
				href={`/profile/${user?._id}`}
				display={"inline-block"}
				width={55}
				height={55}
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
			</Link>
			<Box flexGrow={1}>
				<Link href={`/profile/${user?._id}`} display={"inline-block"}>
					<Typography
						variant="subtitle1"
						color="#000"
						fontWeight={600}
						display={"flex"}
						alignItems={"center"}
						gap={"8px"}
					>
						{post?.postedBy.userName}
						<VerifiedIcon fontSize="small" sx={{ color: "#1d9bf0" }} />
					</Typography>
				</Link>
				<Typography variant="subtitle2" color="#958989" maxWidth={"80%"}>
					{cutCaption(post?.caption)}
				</Typography>
				<Box
					position={"relative"}
					height={"92%"}
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
							height={"100%"}
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
				</Box>
			</Box>
		</Stack>
	);
};

export default VideoCard;
