import { NextApiRequest, NextApiResponse } from "Next";
import { TagList } from "../../../components/molecules/TagArea";
import { useState } from "react";

const data: TagList = [
  { id: "tag1", value: "React" },
  { id: "tag2", value: "Vue.js" },
  { id: "tag3", value: "Angular" },
  { id: "tag4", value: "Next.js" },
  { id: "tag5", value: "Nuxt.js" },
  { id: "tag6", value: "jQuery" },
  { id: "tag7", value: "Gatsby.js" },
];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};

export default handler;

const [tagList, setTagList] = useState<TagList>([]);
