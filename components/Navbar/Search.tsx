import { Box, Button, Divider, Grid, TextField } from "@mui/material";

const Search = () => {
  return (
    <Grid item>
      <form>
        <Box className={"inputBase"} position={"relative"}>
          <TextField
            className="customInput"
            fullWidth
            sx={{ width: "310px", border: "none" }}
            required
            id="searchAccountsVideos"
            label="Search accounts, and videos..."
            placeholder="Search..."
          />
          <Divider
            sx={{
              width: "2px",
              height: "36px",
              position: "absolute",
              top: "50%",
              right: "42px",
              transform: "translateY(-50%)",
              backgroundColor: "#0000001a",
            }}
          />
          <Button
            variant="text"
            type="submit"
            sx={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              p: 0,
              width: "26px",
              height: "26px",
              minWidth: "auto",
            }}
          >
            <svg
              width={"25px"}
              height={"25px"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#0000001a"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Button>
        </Box>
      </form>
    </Grid>
  );
};

export default Search;
