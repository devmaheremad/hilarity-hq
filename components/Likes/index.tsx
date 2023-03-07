import { useAppSelector } from "@/store/hook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";

const Likes = () => {
	const isLoggedIn = useAppSelector(
		(state) => state.loginCheckerWithUserData.loginChecker.isLoggedIn
	);

	const handleLikeOrDislike = (): void => {
		if (isLoggedIn) {
			console.log("yes");
		} else {
			console.log("no");
		}
	};

	return (
		<Box height={"100px"} mt={4}>
			<IconButton
				onClick={handleLikeOrDislike}
				aria-label="like/dislike"
				sx={{
					height: "60px",
					width: "60px",
					borderRadius: "35px",
					bgcolor: "#f1f1f2",
				}}
			>
				<FavoriteIcon sx={{ fontSize: "24px" }} />
			</IconButton>
		</Box>
	);
};

export default Likes;
