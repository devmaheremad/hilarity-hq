import { Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "../Link";
import { googleLogout } from "@react-oauth/google";
import { setLoginStatus } from "@/store/features/loginChecker";
import { addUser } from "@/store/features/authUser";
import { useRouter } from "next/router";
const WhenLogin = () => {
	const user = useAppSelector((state) => state.userProfile.authUser);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const pushToHome = (): void => {
		router.push("/");
	};

	return (
		<>
			<Link href={"/upload"} display={"flex"} alignItems={"center"}>
				<Button
					variant="outlined"
					startIcon={<AddIcon sx={{ mr: { xs: "0", sm: "8px" } }} />}
				>
					<Typography
						variant="body1"
						sx={{ display: { xs: "none", sm: "block" } }}
						component={"span"}
					>
						Uplaod
					</Typography>
				</Button>
			</Link>
			{user?.image && (
				<Link href={"/"} display={"flex"} alignItems={"center"}>
					<Image
						src={`${user?.image}`}
						alt={`${user?.userName}`}
						width={50}
						height={50}
						className={"border-around rounded-circle"}
					/>
				</Link>
			)}
			<IconButton
				sx={{ width: "50px", height: "50px" }}
				aria-label="Logout"
				onClick={() => {
					googleLogout();
					dispatch(setLoginStatus(false));
					dispatch(addUser(null));
					pushToHome();
				}}
			>
				<LogoutIcon sx={{ color: "#f51997" }} />
			</IconButton>
		</>
	);
};

export default WhenLogin;
