import { AppBar, Grid, Toolbar } from "@mui/material";
import { LogoLink, MenuWithUpload, Search } from "./";
const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      component={"nav"}
      className={"bg-transparent justify-content-center"}
      sx={{ height: { xs: "auto" }, py: "15px", bgcolor: "transparent" }}
    >
      <Toolbar
        className="contentCentered w-100 flexWrap max-w-1300px mx-auto"
        sx={{
          px: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
        }}
      >
        <Grid
          flexDirection={{ xs: "column", md: "row" }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          container
          gap={"18px"}
        >
          <LogoLink />
          <Search />
          <MenuWithUpload />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
