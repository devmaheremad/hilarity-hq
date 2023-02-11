import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { client } from "@/utils/client";
import { SanityAssetDocument } from "@sanity/client";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import HeadingWithSub from "../HeadingWithSub";
import VideoToUploadCondtion from "../VideoToUploadCondtion";
import WaitingToUpload from "../WaitingToUpload";

const VideoUploader = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | null>(
		null
	);
	const [wrongType, setWrongType] = useState<boolean>(false);

	const uploadVideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files !== null) {
			const selectedFile = e.target.files[0];
			const fileTypes = ["video/mp4", "video/webm", "video/ogg"];
			if (fileTypes.includes(selectedFile.type)) {
				setIsLoading(true);
				client.assets
					.upload("file", selectedFile, {
						contentType: selectedFile.type,
						filename: selectedFile.name,
					})
					.then((data) => {
						setIsLoading(false);
						setVideoAsset(data);
					});
			} else {
				setIsLoading(false);
				setWrongType(true);
			}
		}
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
				) : videoAsset ? (
					<video src={videoAsset.url} width={"95%"} loop controls></video>
				) : (
					<>
						<CloudUploadIcon
							color="secondary"
							sx={{
								fontSize: { xs: 55, sm: 65 },
								transition: "all 0.3s ease-in-out",
							}}
						/>
						<VideoToUploadCondtion />
						<IconButton
							aria-label="upload a video"
							component="label"
							sx={{
								display: "block",
								height: "100%",
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								borderRadius: "0px",
								m: "0 !important",
							}}
						>
							<input
								hidden
								type="file"
								name="video-uploaded"
								onChange={uploadVideo}
							/>
						</IconButton>
					</>
				)}
			</Stack>
			{wrongType && (
				<Typography
					variant="body2"
					color="#f51997"
					mt={2}
					px={2}
					textAlign={"center"}
				>
					Please select a video file, and this video must be in one of these
					formats ( MP4, WebM, or ogg )
				</Typography>
			)}
		</Box>
	);
};

export default VideoUploader;
