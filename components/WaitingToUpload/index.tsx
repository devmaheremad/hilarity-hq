import { LoaderVideo } from "@/public/assets/imgs";
import { Typography } from "@mui/material";
import Image from "next/image";

const WaitingToUpload = () => {
	return (
		<>
			<Image src={LoaderVideo} alt={`${LoaderVideo}`} />
			<Typography
				variant="body2"
				color="#f51997"
				mt={2}
				px={2}
				textAlign={"center"}
			>
				Please, wait while we upload your video
			</Typography>
		</>
	);
};

export default WaitingToUpload;
