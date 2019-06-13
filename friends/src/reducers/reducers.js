import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_DATA_START,
  GET_DATA_SUCCESS
} from "../actions/actions";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null,
  token: localStorage.getItem("token")
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
    case GET_DATA_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      };
    default:
      return state;
  }
};
export default rootReducer;
