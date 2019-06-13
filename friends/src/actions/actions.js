import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const GET_DATA_START = "GET_DATA_START";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("call failed: ", err.response);
      dispatch({ type: GET_DATA_FAILURE, payload: err.response });
    });
};
