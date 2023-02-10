import { HomeProps, VedioTypes } from "@/@types/video.types";
import Feed from "@/components/Feed";
import { Box, Stack } from "@mui/material";
import { GetServerSideProps } from "next";
import { Sidebar } from "../components";

const Home = ({ videos }: HomeProps) => {
	return (
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
				<Feed videos={videos} />
			</Stack>
		</Box>
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
