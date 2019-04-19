import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/actions";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        error: false
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error: true,
        loggingIn: false
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
