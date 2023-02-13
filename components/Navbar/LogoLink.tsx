import { Grid } from "@mui/material";
import Image from "next/image";
import { LogoImg } from "../../public/assets/imgs";
import Link from "../Link";

const LogoLink = () => {
	return (
		<Grid item width={"140px"}>
			<Link href={"/"} display={"flex"} title="LogoImg">
				<Image
					src={LogoImg}
					alt={"Main logo"}
					placeholder={"blur"}
					width={140}
					height={55}
				/>
			</Link>
		</Grid>
	);
};

export default LogoLink;
