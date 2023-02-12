import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SanityAssetDocument } from "@sanity/client";

type UploaderInitialState = {
	isLoading: boolean;
	videoAsset: SanityAssetDocument | null;
	wrongType: boolean;
	postBtnIsDisabled: boolean;
};

const initialState: UploaderInitialState = {
	isLoading: false,
	videoAsset: null,
	wrongType: false,
	postBtnIsDisabled: true,
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
		setPostBtnIsDisabled: (state, action: PayloadAction<boolean>) => {
			state.postBtnIsDisabled = action.payload;
		},
	},
});

export default uploaderSlice.reducer;
export const {
	setIsLoading,
	setVideoAsset,
	setWrongType,
	setPostBtnIsDisabled,
} = uploaderSlice.actions;
