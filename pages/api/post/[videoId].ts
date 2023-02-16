import { VideoTypes } from "@/@types/video.types";
import { client } from "@/utils/client";
import { postDetailQuery } from "@/utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
	req: NextApiRequest,
	res: NextApiResponse<VideoTypes>
) => {
	if (req.method === "GET") {
		const { videoId } = req.query;
		if (videoId) {
			const query = postDetailQuery(videoId);
			const data: VideoTypes[] = await client.fetch(query);
			res.status(200).json(data[0]);
		}
	}
};

export default handler;
