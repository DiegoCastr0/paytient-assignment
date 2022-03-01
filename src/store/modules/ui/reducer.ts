import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from "./types";
import { AnyAction, Reducer } from "redux";

export interface PostsState {
  isMobileMenuOpen: boolean;
}

const initialState: PostsState = {
  isMobileMenuOpen: false,
};

const reducer: Reducer<PostsState, AnyAction> = (
  state = initialState,
  action
): PostsState => {
  switch (action.type) {
    case OPEN_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: true,
      };
    case CLOSE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: false,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
