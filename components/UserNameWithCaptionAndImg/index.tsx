import { UserNameWithCaptionAndImgProps } from "@/@types/userNameWithCaptionAndImg.types";
import { Typography } from "@mui/material";
import Link from "../Link";
import VerifiedIcon from "@mui/icons-material/Verified";

const UserNameWithCaptionAndImg = ({
	userName,
	userId,
	caption,
}: UserNameWithCaptionAndImgProps) => {
	const cutCaption = (captionStr: string): string => {
		return captionStr.length >= 250
			? `${captionStr.substring(0, 250)}...`
			: captionStr;
	};
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
			<Typography variant="subtitle2" color="#958989" maxWidth={"80%"}>
				{cutCaption(caption)}
			</Typography>
		</>
	);
};

export default UserNameWithCaptionAndImg;
