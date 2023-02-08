import { HomeProps, VedioTypes } from "@/@types/video.types";
import { Box, Stack } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { NoResults, Sidebar, VideoCard } from "../components";

const Home: NextPage<HomeProps> = ({ videos }) => {
  return (
    <Box
      px={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      mx={"0 auto"}
      maxWidth={"1300px"}
    >
      <Stack
        direction={"row"}
        position={"relative"}
        height={"65vh"}
        spacing={{ xs: 4, sx: 0 }}
      >
        <Sidebar />
        <Stack direction={"column"} spacing={2} flexGrow={1}>
          {videos.length ? (
            videos.map((video: VedioTypes) => {
              return <VideoCard post={video} key={video._id} />;
            })
          ) : (
            <NoResults />
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/post");
  // const data: VedioTypes[] = await response.json();
  const data: VedioTypes[] = await response.json();

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
