import { Box, IconButton, Stack } from "@mui/material";
import HeadingWithSub from "../HeadingWithSub";
import WaitingToUpload from "../WaitingToUpload";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { VideoInputFile, WrongTypeVideo } from "..";
import DeleteIcon from "@mui/icons-material/Delete";
import { setVideoAsset } from "@/store/features/uploader";
const VideoUploader = () => {
	const isLoading = useAppSelector((state) => state.uploader.isLoading);
	const videoAsset = useAppSelector((state) => state.uploader.videoAsset);
	const wrongType = useAppSelector((state) => state.uploader.wrongType);
	const dispatch = useAppDispatch();

	const deleteTheVideoAsset = () => {
		dispatch(setVideoAsset(null));
	};

	return (
		<Box
			flexShrink={0}
			width={{ xs: "226px", sm: "320px", md: "380px" }}
			mx={"auto"}
		>
			<HeadingWithSub
				headingVariant={"h5"}
				headingText={"Upload a video"}
				headingColor={"#000"}
				headingFontWeight={600}
				subVariant={"body2"}
				subText={"Post a video to your account"}
				subColor={"#b5b3b3"}
				textAlign={"center"}
			/>
			<Stack
				position={"relative"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				direction={"column"}
				spacing={3}
				mt={5}
				height={"450px"}
				border={"3px dashed #8080800f"}
				bgcolor={"#8080800f"}
				borderRadius={"10px"}
				sx={{
					transition: "all 0.3s ease-in-out",
					"&:hover": {
						backgroundColor: "#80808029",
						border: "3px dashed #f51997",
					},
					"&:hover svg": { fill: "#f51997" },
				}}
			>
				{isLoading ? (
					<WaitingToUpload />
				) : videoAsset?.url ? (
					<>
						<IconButton
							aria-label="delete this video"
							onClick={deleteTheVideoAsset}
						>
							<DeleteIcon />
						</IconButton>
						<video src={videoAsset?.url} width={"95%"} loop controls></video>
					</>
				) : (
					<VideoInputFile />
				)}
			</Stack>
			{wrongType && <WrongTypeVideo />}
		</Box>
	);
};

export default VideoUploader;
