import { UserPostedToSanity } from "@/@types/userSanity";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthUserInitialState = {
	authUser: UserPostedToSanity | null;
};

const initialState: AuthUserInitialState = {
	authUser: null,
};

const authUserSlice = createSlice({
	name: "authUser",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<UserPostedToSanity | null>) => {
			state.authUser = action.payload;
		},
	},
});

export default authUserSlice.reducer;
export const { addUser } = authUserSlice.actions;
