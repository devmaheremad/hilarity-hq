import { VideoUploader, VideoUploaderForm } from "@/components";
import { Box, Stack } from "@mui/material";
import Head from "next/head";

const Upload = () => {
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
					<VideoUploader />
					<VideoUploaderForm />
				</Stack>
			</Box>
		</>
	);
};

export default Upload;
