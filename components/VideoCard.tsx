import { VideoCardProps } from "@/@types/videoCard.types";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import VerifiedIcon from "@mui/icons-material/Verified";

const VideoCard = ({ post }: VideoCardProps) => {
  const cutCaption = (captionStr: string): string =>
    captionStr.length >= 250
      ? `${captionStr.substring(0, 250)}...`
      : captionStr;

  const {
    caption,
    postedBy: { image, userName },
    video: {
      asset: { url },
    },
  } = post;

  return (
    <Stack
      height={{ xs: "300px", md: "500px", lg: "700px" }}
      width={"100%"}
      display={"flex"}
      flexDirection={"row"}
      gap={2}
    >
      <Image
        src={image}
        alt={caption}
        width={55}
        height={55}
        placeholder={"blur"}
        blurDataURL={"blur"}
        className={"rounded-circle"}
      />
      <Box flexGrow={1}>
        <Typography
          variant="subtitle1"
          color="#000"
          fontWeight={600}
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
        >
          {userName} <VerifiedIcon fontSize="small" sx={{ color: "#1d9bf0" }} />
        </Typography>
        <Typography variant="subtitle2" color="black" maxWidth={"80%"}>
          {cutCaption(caption)}
        </Typography>
      </Box>
    </Stack>
  );
};

export default VideoCard;
