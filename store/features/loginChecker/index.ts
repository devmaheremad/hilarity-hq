import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

type LoginCheckerInitialState = {
	isLoggedIn: boolean;
};

const initialState: LoginCheckerInitialState = {
	isLoggedIn: false,
};

const loginCheckerSlice = createSlice({
	name: "loginChecker",
	initialState,
	reducers: {
		setLoginStatus: (state, action: PayloadAction<boolean>) => {
			state.isLoggedIn = action.payload;
		},
	},
});

export default loginCheckerSlice.reducer;
export const { setLoginStatus } = loginCheckerSlice.actions;

export function isLogin(loginBefore: boolean) {
	return async (dispatch: Dispatch) => {
		try {
			await dispatch(loginCheckerSlice.actions.setLoginStatus(loginBefore));
		} catch (error) {
			console.log(error);
		}
	};
}
