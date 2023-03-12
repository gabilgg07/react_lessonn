import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "../constants/type";
import API from "../api/api";

// export const fetchUsers = () => {
//     return {
//       type: FETCH_USERS,
//       payload: [],
//     };
//   };

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });

  try {
    const { data } = await API.get("/users");

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_FAIL,
      payload: error,
    });
  }
};
