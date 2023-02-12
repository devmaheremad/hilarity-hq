import { setVideoAsset } from "@/store/features/uploader";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { BASE_URL } from "@/utils";
import { popularTopics } from "@/utils/constants";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Stack,
	TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const VideoUploaderForm = () => {
	const router = useRouter();

	const [cateogry, setCateogry] = useState<string>("");
	const [caption, setCaption] = useState<string>("");
	const [savingPost, setSavingPost] = useState<boolean>(false);

	const postBtnIsDisabled = useAppSelector(
		(state) => state.uploader.postBtnIsDisabled
	);
	const videoAsset = useAppSelector((state) => state.uploader.videoAsset);
	const authUser = useAppSelector(
		(state) => state.loginCheckerWithUserData.userProfile.authUser
	);

	const dispatch = useAppDispatch();

	const handleCategoryChange = (event: SelectChangeEvent) => {
		setCateogry(event.target.value);
	};

	const handleSubmitPost = async () => {
		if (videoAsset?._id && cateogry && caption) {
			setSavingPost(true);
			const documentPost = {
				_type: "post",
				caption,
				video: {
					_type: "file",
					asset: {
						_type: "refrence",
						_ref: videoAsset?._id,
					},
				},
				userId: authUser?._id,
				postedBy: {
					_type: "postedBy",
					_ref: authUser?._id,
				},
				topic: cateogry,
			};
			await fetch(`${BASE_URL}/api/post`, {
				method: "POST",
				body: JSON.stringify(documentPost),
				headers: {
					"Content-Type": "application/json",
				},
			});
			dispatch(setVideoAsset(null));
			router.push("/");
		}
	};

	return (
		<Stack
			direction={"column"}
			spacing={3}
			flexGrow={1}
			pt={{ xs: "20px", md: "130px" }}
		>
			<TextField
				required
				id="caption"
				label="Caption"
				variant="outlined"
				sx={{ mb: 4 }}
				defaultValue={caption}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setCaption(e.target.value)
				}
			/>
			<FormControl sx={{ mb: 4, minWidth: 120 }} className={"labelBgWhite"}>
				<InputLabel id="category-selected">cateogry</InputLabel>
				<Select
					required
					labelId="category-selected"
					id="categort-select"
					value={cateogry}
					onChange={handleCategoryChange}
				>
					{popularTopics.map((topic) => {
						return (
							<MenuItem key={topic.name} value={topic.name}>
								{topic.name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
			<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
				<Button
					fullWidth
					variant="outlined"
					sx={{ textTransform: "none", height: "50px" }}
				>
					Discard
				</Button>
				<Button
					disabled={postBtnIsDisabled}
					onClick={handleSubmitPost}
					fullWidth
					variant="contained"
					sx={{ textTransform: "none", height: "50px" }}
				>
					Post
				</Button>
			</Stack>
		</Stack>
	);
};

export default VideoUploaderForm;
