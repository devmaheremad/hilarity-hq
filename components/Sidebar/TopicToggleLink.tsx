import { TopicToggleLinkProps } from "@/@types/topicToggleLink.types";
import { Typography } from "@mui/material";
import Link from "../Link";

const TopicToggleLink = ({ name, icon }: TopicToggleLinkProps) => {
  return (
    <div>
      <Link
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "5px",
          p: { xs: "5px 10px", md: "10px 15px" },
        }}
        href={`/?topic=${name}`}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          color="#000"
        >
          {icon}
        </Typography>
        <Typography
          variant="subtitle2"
          display={{ xs: "none", sm: "block" }}
          color="initial"
        >
          {name}
        </Typography>
      </Link>
    </div>
  );
};

export default TopicToggleLink;
