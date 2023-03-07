import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";

const Likes = () => {
	return (
		<Box height={"100px"} mt={4}>
			<Box
				height={"60px"}
				width={"60px"}
				borderRadius={"35px"}
				bgcolor={"#f1f1f2"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<FavoriteIcon sx={{ fontSize: "25px" }} />
			</Box>
		</Box>
	);
};

export default Likes;
