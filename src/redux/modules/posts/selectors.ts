import { RootState } from "../../";
import { Post } from "../../../types";


export const selectPosts = (state: RootState): Post[] => state.posts.list || [];
