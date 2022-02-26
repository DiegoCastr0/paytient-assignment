import { Post } from "../../../types";
import Axios from "axios";

export const getPosts = async (): Promise<Post[]> => {
  const response = await Axios.get(
    "https://www.reddit.com/r/todayilearned.json"
  );
  const posts = response.data.data.children;
  return posts.map((post: { data: Post }) => post.data);
};
