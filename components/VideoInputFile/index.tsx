import { IconButton } from "@mui/material";
import { useAppDispatch } from "@/store/hook";
import {
	setIsLoading,
	setPostBtnIsDisabled,
	setVideoAsset,
	setWrongType,
} from "@/store/features/uploader";
import { client } from "@/utils/client";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { VideoToUploadCondtion } from "..";

const VideoInputFile = () => {
	const dispatch = useAppDispatch();

	const uploadVideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files !== null) {
			const selectedFile = e.target.files[0];
			const fileTypes = ["video/mp4", "video/webm", "video/ogg"];
			if (fileTypes.includes(selectedFile.type)) {
				dispatch(setIsLoading(true));
				await client.assets
					.upload("file", selectedFile, {
						contentType: selectedFile.type,
						filename: selectedFile.name,
					})
					.then((data) => {
						dispatch(setIsLoading(false));
						dispatch(setPostBtnIsDisabled(false));
						dispatch(setVideoAsset(data));
					});
			} else {
				dispatch(setIsLoading(false));
				dispatch(setWrongType(true));
			}
		}
	};

	return (
		<>
			<CloudUploadIcon
				color="secondary"
				sx={{
					fontSize: { xs: 55, sm: 65 },
					transition: "all 0.3s ease-in-out",
				}}
			/>
			<VideoToUploadCondtion />
			<IconButton
				aria-label="upload a video"
				component="label"
				sx={{
					display: "block",
					height: "100%",
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					borderRadius: "0px",
					m: "0 !important",
				}}
			>
				<input
					required
					hidden
					type="file"
					name="video-uploaded"
					onChange={uploadVideo}
				/>
			</IconButton>
		</>
	);
};

export default VideoInputFile;
