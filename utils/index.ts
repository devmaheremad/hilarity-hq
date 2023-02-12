import { DecodedTypes } from "@/@types/decoded.types";
import { UserPostedToSanity } from "@/@types/userSanity";
import { addUser } from "@/store/features/authUser";
import { isLogin } from "@/store/features/loginChecker";
import store from "@/store/store";
import jwt_decode from "jwt-decode";
export const BASE_URL = process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN;

export const createOrGetUser = async (response: any) => {
	const decoded: DecodedTypes = jwt_decode(response.credential);

	const { sub, name, picture } = decoded;

	const user: UserPostedToSanity = {
		_id: sub,
		_type: "user",
		userName: name,
		image: picture,
	};

	store.dispatch(addUser(user));
	store.dispatch(isLogin(true));

	await fetch(`${BASE_URL}/api/auth`, {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
