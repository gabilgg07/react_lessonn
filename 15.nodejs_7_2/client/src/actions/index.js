import API from "../api";

import {
  REGISTER_ACCOUNT,
  REGISTER_ACCOUNT_FAIL,
  REGISTER_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT,
  LOGIN_ACCOUNT_FAIL,
  LOGIN_ACCOUNT_SUCCESS,
} from "../constants";

export const registerAccount = (item) => async (dispatch) => {
  dispatch({ type: REGISTER_ACCOUNT });

  try {
    const { data } = await API.post("/accounts/register", item);
    dispatch({ type: REGISTER_ACCOUNT_SUCCESS, payload: data });

    localStorage.setItem("acntInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: REGISTER_ACCOUNT_FAIL,
      payload: error.response && error.response.data,
    });
  }
};

export const loginAccount = (item) => async (dispatch) => {
  dispatch({ type: LOGIN_ACCOUNT });

  try {
    const { data } = await API.post("/accounts/login", item);
    dispatch({ type: LOGIN_ACCOUNT_SUCCESS, payload: data });

    localStorage.setItem("acntInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_ACCOUNT_FAIL,
      payload: error.response && error.response.data,
    });
  }
};
