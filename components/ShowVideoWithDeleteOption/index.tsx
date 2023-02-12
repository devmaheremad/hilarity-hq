import { setVideoAsset } from "@/store/features/uploader";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ShowVideoWithDeleteOption = () => {
	const videoAsset = useAppSelector((state) => state.uploader.videoAsset);
	const dispatch = useAppDispatch();

	const deleteTheVideoAsset = () => {
		dispatch(setVideoAsset(null));
	};

	return (
		<>
			<IconButton aria-label="delete this video" onClick={deleteTheVideoAsset}>
				<DeleteIcon />
			</IconButton>
			<video src={videoAsset?.url} width={"95%"} loop controls></video>
		</>
	);
};

export default ShowVideoWithDeleteOption;
