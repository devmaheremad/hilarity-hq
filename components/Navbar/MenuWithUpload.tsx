import { useAppSelector } from "@/store/hook";
import { createOrGetUser } from "@/utils";
import { Grid, Stack } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { WhenLogin } from "..";

const MenuWithUpload = () => {
	const isLoggedIn = useAppSelector((state) => state.loginChecker.isLoggedIn);
	return (
		<Grid item xs={5}>
			<Stack
				direction={"row"}
				spacing={3}
				justifyContent={{ xs: "center", md: "flex-end" }}
			>
				{isLoggedIn ? (
					<WhenLogin />
				) : (
					<GoogleLogin
						onSuccess={(response) => createOrGetUser(response)}
						onError={() => {
							console.log("Login Failed");
						}}
					/>
				)}
			</Stack>
		</Grid>
	);
};

export default MenuWithUpload;
