import { Button, Typography } from "@mui/material";
import Link from "../Link";
import HomeIcon from "@mui/icons-material/Home";

const HomeBtn = () => {
  return (
    <Link href={"/"}>
      <Button
        sx={{
          width: "100px",
          border: "none",
          "&:hover": { border: "0" },
        }}
        variant="outlined"
        startIcon={
          <HomeIcon color="primary" sx={{ fontSize: "25px !important" }} />
        }
      >
        <Typography
          display={{ xs: "none", md: "block" }}
          variant="h6"
          fontWeight={500}
          textTransform={"capitalize"}
          color={"#f51997"}
        >
          Home
        </Typography>
      </Button>
    </Link>
  );
};

export default HomeBtn;
