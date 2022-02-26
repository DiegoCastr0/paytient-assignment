import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../../types";
import { getPosts } from "./api";
import {
  GET_POSTS_FETCHING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
} from "./types";

const getPostsFetching = () => ({
  type: GET_POSTS_FETCHING,
});

const getChractersFulfilled = (payload: Post[]) => ({
  type: GET_POSTS_FULFILLED,
  payload,
});

const getPostsRejected = () => ({
  type: GET_POSTS_REJECTED,
});

export const getPostsAction = createAsyncThunk(
  "posts",
  async (a, thunkAPI) => {
    try {
      thunkAPI.dispatch(getPostsFetching());
      const response = await getPosts();
      thunkAPI.dispatch(getChractersFulfilled(response));
    } catch (error) {
      thunkAPI.dispatch(getPostsRejected());
    }
  }
);
