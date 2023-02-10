import { SideFooterProps } from "@/@types/sideFootertypes";
import { Stack, Typography } from "@mui/material";
import React from "react";
import Link from "../Link";
import styles from "../../styles/SideFooter.module.css";
const SideFooter = ({ list }: SideFooterProps) => {
	return (
		<Stack direction={"row"} spacing={"0"} flexWrap={"wrap"}>
			{list.map((item) => {
				return (
					<Link
						className={styles.footerLink}
						ml={"8px !important"}
						key={item}
						href={"/"}
						display={{ xs: "none", md: "block" }}
						flexShrink={0}
					>
						<Typography variant="body2" color="gray">
							{item}
						</Typography>
					</Link>
				);
			})}
		</Stack>
	);
};

export default SideFooter;
