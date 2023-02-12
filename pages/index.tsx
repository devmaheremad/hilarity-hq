import { HomeProps, VideoTypes } from "@/@types/video.types";
import Feed from "@/components/Feed";
import { BASE_URL } from "@/utils";
import { Box, Stack } from "@mui/material";
import { GetServerSideProps } from "next";
import { Headhtml, Sidebar } from "../components";

const Home = ({ videos }: HomeProps) => {
	return (
		<>
			<Headhtml
				title={"Hilarity HQ Home Page"}
				metaDesc={
					"Discover endless laughs at Hilarity HQ! Our website features a collection of the funniest jokes, memes, videos, and more. Join our community for a daily dose of humor."
				}
			/>
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
	const response = await fetch(`${BASE_URL}/api/post`);
	const data: VideoTypes[] = await response.json();

	return {
		props: {
			videos: data,
		},
	};
};

export default Home;
