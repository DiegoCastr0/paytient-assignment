import {
  GET_POSTS_FETCHING,
  GET_POSTS_FULFILLED,
  GET_POSTS_REJECTED,
} from "./types";
import { AnyAction, Reducer } from "redux";
import { Post } from "types";

export interface PostsState {
  isLoading: boolean;
  error: boolean;
  list: Post[];
}

const initialState: PostsState = {
  isLoading: false,
  error: false,
  list: [] as Post[],
};


const reducer: Reducer<PostsState, AnyAction> = (
  state = initialState,
  action
): PostsState => {
  switch (action.type) {
    case GET_POSTS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_POSTS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
