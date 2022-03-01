import { RootState } from "store";
import { Post } from "types";


export const selectPosts = (state: RootState): Post[] => state.posts.list || [];
export const selectFetchingPosts = (state: RootState): boolean => state.posts.isLoading;
export const selectErrorPosts = (state: RootState): boolean => state.posts.error;

