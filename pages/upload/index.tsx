import { Sidebar } from "@/components";
import { Box, Stack } from "@mui/material";
import Head from "next/head";
import React from "react";

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
			>
				<Stack
					direction={"row"}
					position={"relative"}
					height={"65vh"}
					spacing={{ xs: 4, sx: 0 }}
				>
					<Sidebar />
					<h1>test</h1>
				</Stack>
			</Box>
		</>
	);
};

export default Upload;
