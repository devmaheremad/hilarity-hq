import { Headhtml, Sidebar } from "@/components";
import { Box, Stack, Typography } from "@mui/material";

const Profile = () => {
	return (
		<>
			<Headhtml
				title={"Hilarity HQ Profile Page"}
				metaDesc={
					"Get to know our members and their comedic preferences at Hilarity HQ! Our profile pages display user information and the videos they have uploaded, as well as their liked videos."
				}
			/>
			<Box
				px={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
				className={"paddingContent min-h-100vh max-w-1300px mx-auto"}
			>
				<Stack
					direction={"row"}
					position={"relative"}
					minHeight={"100vh"}
					spacing={{ xs: 4, sx: 0 }}
				>
					<Sidebar />
					<Stack direction={"column"} spacing={2} flexGrow={1}>
						<Typography variant="h4" component={"h1"} color="black">
							Profile Page
						</Typography>
						<Typography variant="h6" color="gray" maxWidth={500}>
							I am working on it these days, this page will include all
							information about the user, like all videos uploaded before, and
							videos put on it like button.
						</Typography>
					</Stack>
				</Stack>
			</Box>
		</>
	);
};

export default Profile;
