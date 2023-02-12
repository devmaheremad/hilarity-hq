import { VideoTypes } from "@/@types/video.types";
import { client } from "@/utils/client";
import { allPostsQuery } from "@/utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<VideoTypes[]>
) => {
	if (req.method === "GET") {
		const query = allPostsQuery();
		const data: VideoTypes[] = await client.fetch(query);
		res.status(200).json(data);
	} else if (req.method === "POST") {
		const documentPost = req.body;
		client.create(documentPost).then(() => res.status(201).json(documentPost));
	}
};

export default handler;
