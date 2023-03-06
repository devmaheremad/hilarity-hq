import { UserNameWithImgProps } from "@/@types/userNameWithImgProps.types";
import { Typography } from "@mui/material";
import Link from "../Link";
import VerifiedIcon from "@mui/icons-material/Verified";

const UserNameWithImg = ({ userName, userId }: UserNameWithImgProps) => {
	return (
		<>
			<Link
				href={`/profile/${userId}`}
				display={"inline-block"}
				title="profile page"
			>
				<Typography
					variant="subtitle1"
					color="#000"
					fontWeight={600}
					display={"flex"}
					alignItems={"center"}
					gap={"8px"}
				>
					{userName}
					<VerifiedIcon fontSize="small" sx={{ color: "#1d9bf0" }} />
				</Typography>
			</Link>
		</>
	);
};

export default UserNameWithImg;
