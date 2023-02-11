import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SanityAssetDocument } from "@sanity/client";

type UploaderInitialState = {
	isLoading: boolean;
	videoAsset: SanityAssetDocument | null;
	wrongType: boolean;
};

const initialState: UploaderInitialState = {
	isLoading: false,
	videoAsset: null,
	wrongType: false,
};

const uploaderSlice = createSlice({
	name: "uploader",
	initialState,
	reducers: {
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setVideoAsset: (
			state,
			action: PayloadAction<SanityAssetDocument | null>
		) => {
			state.videoAsset = action.payload;
		},
		setWrongType: (state, action: PayloadAction<boolean>) => {
			state.wrongType = action.payload;
		},
	},
});

export default uploaderSlice.reducer;
export const { setIsLoading, setVideoAsset, setWrongType } =
	uploaderSlice.actions;
