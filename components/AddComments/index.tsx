import { useAppSelector } from "@/store/hook";

const AddComments = () => {
	const isLoggedIn = useAppSelector(
		(state) => state.loginCheckerWithUserData.loginChecker.isLoggedIn
	);
	return (
		<>
			{isLoggedIn
				? "you can add comments"
				: "you can't add comments please login"}
		</>
	);
};

export default AddComments;
