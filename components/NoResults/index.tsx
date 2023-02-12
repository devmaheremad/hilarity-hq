import { Box, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const NoResults = () => {
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			pt={8}
		>
			<HighlightOffIcon sx={{ fontSize: 80, color: "gray" }} />
			<Typography
				variant="body1"
				color="black"
				textAlign={"center"}
				mt={4}
				px={{ xs: 2, sm: 9 }}
			>
				Unfortunately, there are no videos available at the moment. If you have
				a video that you would like to share, we encourage you to upload it to
				your account.
			</Typography>
			<Typography
				variant="body1"
				color="black"
				textAlign={"center"}
				mt={2}
				px={{ xs: 2, sm: 9 }}
			>
				This will not only allow others to view it, but it will also help to
				create a more diverse and dynamic collection of content for everyone to
				enjoy.
			</Typography>
			<Typography
				variant="body1"
				color="black"
				textAlign={"center"}
				mt={2}
				px={{ xs: 2, sm: 9 }}
			>
				If you dont have a video to upload, why not create one and share your
				perspective or knowledge with the community.
				<u>
					<b>
						We believe that everyone has something valuable to contribute, and
						your contribution will be greatly appreciated. So go ahead and
						upload a video today!
					</b>
				</u>
			</Typography>
		</Box>
	);
};

export default NoResults;
