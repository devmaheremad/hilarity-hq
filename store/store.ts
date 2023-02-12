import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
	loginCheckerReducer,
	uploaderSliceReducer,
	userProfileReducer,
} from "./features/forReducersExport";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigLoginCheckerWithUserData = {
	key: "loginCheckerWithUserData",
	storage,
};

const rootReducer = combineReducers({
	userProfile: userProfileReducer,
	loginChecker: loginCheckerReducer,
});

const persistedLoginCheckerWithUserDataReducer = persistReducer(
	persistConfigLoginCheckerWithUserData,
	rootReducer
);

const store = configureStore({
	reducer: combineReducers({
		loginCheckerWithUserData: persistedLoginCheckerWithUserDataReducer,
		uploader: uploaderSliceReducer,
	}),
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export const persistor = persistStore(store);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
