import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Head from "next/head";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { client } from "@/utils/client";
import { SanityAssetDocument } from "@sanity/client";
import Image from "next/image";
import { LoaderVideo } from "@/public/assets/imgs";

const Upload = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [videoAsset, setVideoAsset] = useState<
		SanityAssetDocument | undefined
	>();
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
		<>
			<Head>
				<title>Upload a video</title>
				<meta
					name="description"
					content="Upload and share your comedic talent with the world at Hilarity HQ! Our platform allows you to upload and showcase funny videos to a community of humor enthusiasts."
				/>
			</Head>
			<Box
				px={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
				mx={"0 auto"}
				maxWidth={"1300px"}
				className={"paddingContent min-h-100vh"}
			>
				<Stack
					direction={{ xs: "column", md: "row" }}
					bgcolor={"#fff"}
					borderRadius={"10px"}
					maxWidth={"950px"}
					mx={"auto"}
					mt={"50px"}
					p={{ xs: 2, md: 5, lg: 7, xl: 8 }}
					spacing={3}
				>
					<Box flexShrink={0} width={"300px"}>
						<Typography variant="h5" color="#000" fontWeight={600}>
							Upload a video
						</Typography>
						<Typography variant="body2" color="#b5b3b3" mt={"2px"}>
							Post a video to your account
						</Typography>
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
								<Image src={LoaderVideo} alt={`${LoaderVideo}`} />
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
									<Typography variant="body1" fontWeight={500} color="black">
										Upload a video
									</Typography>
									<Typography
										variant="caption"
										fontWeight={500}
										color="#808080a6"
									>
										MP4 or WebM or ogg
									</Typography>
									<Typography
										variant="caption"
										fontWeight={500}
										color="#808080a6"
									>
										720*1280 or higher
									</Typography>
									<Typography
										variant="caption"
										fontWeight={500}
										color="#808080a6"
									>
										Up to 20 minutes
									</Typography>
									<Typography
										variant="caption"
										fontWeight={500}
										color="#808080a6"
									>
										Less than 2 GB
									</Typography>
									<Button variant="contained" sx={{ mt: 3 }}>
										Select a video
									</Button>
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
								Please select a video file, and this video must be in one of
								these formats ( MP4, WebM, or ogg )
							</Typography>
						)}
					</Box>
					<Box flexGrow={1}>Form </Box>
				</Stack>
			</Box>
		</>
	);
};

export default Upload;
