import { Button, Grid, Stack } from "@mui/material";

const MenuWithUpload = () => {
  return (
    <Grid item xs={5}>
      <Stack direction={"row"} spacing={3} justifyContent={"flex-end"}>
        <Button
          variant="outlined"
          startIcon={
            <svg
              width={"25px"}
              height={"25px"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
        >
          Upload
        </Button>
        <Button
          variant="outlined"
          startIcon={
            <svg
              width={"25px"}
              height={"25px"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
        >
          Upload
        </Button>
        <Button
          variant="outlined"
          startIcon={
            <svg
              width={"25px"}
              height={"25px"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
        >
          Upload
        </Button>
      </Stack>
    </Grid>
  );
};

export default MenuWithUpload;
