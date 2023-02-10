import { VedioTypes } from "@/@types/video.types";
import { client } from "@/utils/client";
import { allPostsQuery } from "@/utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<VedioTypes[]>
) => {
  if (req.method === "GET") {
    const query = allPostsQuery();
    const data: VedioTypes[] = await client.fetch(query);
    res.status(200).json(data);
  }
};

export default handler;
