import {
	Stack,
	Typography,
	ToggleButtonGroup,
	ToggleButton,
} from "@mui/material";
import { useRouter } from "next/router";
import { popularTopics } from "../../utils/constants";
import TopicToggleLink from "./TopicToggleLink";

const PopularTopics = () => {
	const router = useRouter();
	const { topic } = router.query;

	return (
		<Stack direction={"column"}>
			<Typography
				color="gray"
				textTransform={"capitalize"}
				fontWeight={500}
				mb={"12px"}
			>
				Popular Topics
			</Typography>
			<ToggleButtonGroup
				value={topic}
				size="medium"
				aria-label="Popular topics"
				exclusive
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					flexWrap: "wrap",
					gap: "10px",
				}}
			>
				{popularTopics.map((topic) => {
					const { name, icon } = topic;
					return (
						<ToggleButton
							key={name}
							value={name}
							sx={{
								color: "black",
								transition: "all 0.3s ease-in-out",
								"&:hover": { color: "#f51997" },
								border: "1px solid gray",
								borderLeft: "1px solid gray !important",
								borderRadius: "25px !important",
								p: "0px",
							}}
						>
							<TopicToggleLink name={name} icon={icon} />
						</ToggleButton>
					);
				})}
			</ToggleButtonGroup>
		</Stack>
	);
};

export default PopularTopics;
