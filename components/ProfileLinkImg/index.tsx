import { ProfileLinkImgIProps } from "@/@types/profileLinkImg.types";
import Image from "next/image";
import React from "react";
import Link from "../Link";

const ProfileLinkImg = ({ userId, userName, image }: ProfileLinkImgIProps) => {
	return (
		<Link
			title="profile page"
			href={`/profile/${userId}`}
			display={"inline-block"}
			width={55}
			height={55}
		>
			<Image
				src={image}
				alt={userName}
				width={55}
				height={55}
				placeholder={"blur"}
				blurDataURL={"blur"}
				className={"rounded-circle border-around"}
			/>
		</Link>
	);
};

export default ProfileLinkImg;
