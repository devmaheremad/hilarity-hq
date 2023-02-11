import { Box } from "@mui/material";
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
				<Box>upload </Box>
				<Box>Form </Box>
			</Box>
		</>
	);
};

export default Upload;
