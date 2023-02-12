import { Box, Stack, Typography } from "@mui/material";

const VideoDetails = () => {
	return (
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
				<Stack direction={"column"} spacing={2} flexGrow={1}>
					<Typography variant="h4" component={"h1"} color="black">
						Video Page
					</Typography>
					<Typography variant="h6" color="gray" maxWidth={500}>
						I am working on it these days, this page will include a video in a
						vast space with all details about it, and the ability to put a
						comment, and like.
					</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};

export default VideoDetails;
