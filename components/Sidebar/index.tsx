import { Box, IconButton, Stack, Divider } from "@mui/material";
import { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";
import { footerList1, footerList2, footerList3 } from "../../utils/constants";
import HomeBtn from "./HomeBtn";
import PopularTopics from "./PopularTopics";
import SideFooter from "./SideFooter";

const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState<boolean>(true);

	return (
		<Box display={"flex"} flexDirection={"column"} flexShrink={0}>
			<Box
				className={"cursor-pointer"}
				position={"absolute"}
				top={"-15px"}
				display={{ xs: "block", md: "none" }}
			>
				<IconButton
					aria-label="delete or menu"
					onClick={() => setShowSidebar((prev) => !prev)}
				>
					{showSidebar ? <CancelOutlinedIcon /> : <MenuOutlinedIcon />}
				</IconButton>
			</Box>
			{showSidebar && (
				<Stack
					mt={3}
					direction={"column"}
					spacing={2}
					width={{ xs: "70px", sm: "120px", md: "400px" }}
					display={"flex"}
					justifyContent={"start"}
				>
					<HomeBtn />
					<Divider sx={{ maxWidth: "320px" }} />
					<PopularTopics />
					<Divider sx={{ maxWidth: "320px" }} />
					<SideFooter list={footerList1} />
					<SideFooter list={footerList2} />
					<SideFooter list={footerList3} />
				</Stack>
			)}
		</Box>
	);
};

export default Sidebar;
