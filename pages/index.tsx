import { HomeProps, VedioTypes } from "@/@types/video.types";
import Feed from "@/components/Feed";
import { Box, Stack } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Sidebar } from "../components";

const Home = ({ videos }: HomeProps) => {
	return (
		<>
			<Head>
				<title>Hilarity HQ Home Page</title>
				<meta
					name="description"
					content="Discover endless laughs at Hilarity HQ! Our website features a collection of the funniest jokes, memes, videos, and more. Join our community for a daily dose of humor."
				/>
			</Head>
			<Box
				px={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
				mx={"0 auto"}
				maxWidth={"1300px"}
				className={"paddingContent min-h-100vh"}
			>
				<Stack
					direction={"row"}
					position={"relative"}
					minHeight={"100vh"}
					spacing={{ xs: 4, sx: 0 }}
				>
					<Sidebar />
					<Feed videos={videos} />
				</Stack>
			</Box>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const response = await fetch("http://localhost:3000/api/post");
	const data: VedioTypes[] = await response.json();

	return {
		props: {
			videos: data,
		},
	};
};

export default Home;
